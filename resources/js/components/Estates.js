import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Estates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.user,
            pagination: [],
            estates: [],
            searchCity: '',
            searchCountry: '',
            searchLayout: '',
            searchPriceUp: 0,
            searchPriceDown: 0,
            url: ''
        };
    }

    changeCountry(event) {
        this.setState({
            searchCountry: event.target.value
        });
    }

    changeCity(event) {
        this.setState({
            searchCity: event.target.value
        });
    }

    changeLayout(event) {
        this.setState({
            searchLayout: event.target.value
        });
    }

    changePriceUp(event) {
        this.setState({
            searchPriceUp: event.target.value
        });
    }

    changePriceDown(event) {
        this.setState({
            searchPriceDown: event.target.value
        });
    }

    search() {
        axios.get('api/estate/search',
            {
            params: {
                country: this.state.searchCountry,
                city: this.state.searchCity,
                layout: this.state.searchLayout,
                priceUp: this.state.searchPriceUp,
                priceDown: this.state.searchPriceDown
            }
        })
        .then(response => {
            this.setState({
                estates: response.data
            });

            this.makePagination(response.data);
        });
    }

    clean() {
        this.setState({
            searchCity: '',
            searchCountry: '',
            searchLayout: '',
            searchPriceUp: 0,
            searchPriceDown: 0
        });
        this.returnFields();
    }

    returnFields() {
        axios.get('api/estates').then(response => {
            this.setState({
                estates: response.data.data
            });
            this.makePagination(response.data);
        });
    }

    loadNextPage() {
        this.setState({
            url: this.state.pagination.nextPageUrl
        });

        if (this.state.pagination.nextPageUrl) {
            axios.get(this.state.pagination.nextPageUrl).then(response => {
                this.setState({
                    estates: response.data.data
                });
                this.makePagination(response.data);
            });
        }
    }

    loadPrevPage() {
        this.setState({
            url: this.state.pagination.prevPageUrl
        });

        if (this.state.pagination.prevPageUrl) {
            axios.get(this.state.pagination.prevPageUrl).then(response => {
                this.setState({
                    estates: response.data.data
                });
                this.makePagination(response.data);
            });
        }
    }

    makePagination(data) {
        let pagination = {
            currentPage: data.current_page,
            lastPage: data.last_page,
            nextPageUrl: data.next_page_url,
            prevPageUrl: data.prev_page_url,
            url: data.path
        };

        this.setState({
            pagination: pagination
        })
    }

    componentDidMount() {
        this.returnFields();
    }

    componentDidUpdate() {

    }

    newEstate() {
        window.location.assign('/estate/add');
    }

    render() {
        let tableTemplate;

        function makeColumns(row, i) {
            return (
                <tr key={i} onClick={handleClick.bind(this, row._id)}>
                    <td>{row.Country}</td>
                    <td>{row.City}</td>
                    <td>{row.layout}</td>
                    <td>{row.price}</td>
                    <td>{row.square}</td>
                </tr>
            );
        }

        function handleClick(i) {
            window.location.assign('/estates/' + i);
        }

        tableTemplate = this.state.estates.map((row, i) => {
            return makeColumns(row,i);
        });

        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>
                                Country:
                                <input
                                    value={this.state.searchCountry}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by country"
                                    onChange={this.changeCountry.bind(this)}
                                />
                            </label>
                            <label>
                                City:
                                <input
                                    value={this.state.searchCity}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by city"
                                    onChange={this.changeCity.bind(this)}
                                />
                            </label>
                            <label>
                                Layout:
                                <input
                                    value={this.state.searchLayout}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by layout"
                                    onChange={this.changeLayout.bind(this)}
                                    required
                                />
                            </label>
                            <label>
                                Price, from:
                                <input
                                    value={this.state.searchPriceUp}
                                    type="number"
                                    className="form-control"
                                    placeholder="Search estates by price"
                                    onChange={this.changePriceUp.bind(this)}
                                    required
                                />
                            </label>
                            <label>
                                Price, to:
                                <input
                                    value={this.state.searchPriceDown}
                                    type="number"
                                    className="form-control"
                                    placeholder="Search estates by price"
                                    onChange={this.changePriceDown.bind(this)}
                                    required
                                />
                            </label>
                        </div>
                        <button onClick={this.search.bind(this)}>Search</button>
                        <button onClick={this.clean.bind(this)}>Clear</button>
                    </div>
                </div>
                <h2>
                    Popular
                </h2>
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <td>Country</td>
                            <td>City</td>
                            <td>Layout</td>
                            <td>Price</td>
                            <td>Square</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTemplate}
                    </tbody>
                </table>
                <button className="btn btn-default" onClick={this.loadNextPage.bind(this)}>Next Page</button>
                <button className="btn btn-default" onClick={this.loadPrevPage.bind(this)}>Prev Page</button>
                <button className="btn btn-default" onClick={this.newEstate.bind(this)}>Add Estate</button>
            </div>
        );
    }
}

if (document.getElementById('estates')) {
    let userId = document.getElementById('estates').getAttribute('data');
    ReactDOM.render(<Estates user={userId}/>, document.getElementById('estates'));
}
