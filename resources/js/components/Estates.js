import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Estates extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pagination: [],
            estates: [],
            searchCity: '',
            searchCountry: '',
            searchLayout: '',
            searchPrice: 0,
            url: ''
        };

        this.changeCountry = this.changeCountry.bind(this);
        this.changeCity = this.changeCity.bind(this);
        this.changeLayout = this.changeLayout.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.search = this.search.bind(this);
        this.clean = this.clean.bind(this);
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

    changePrice(event) {
        this.setState({
            searchPrice: event.target.value
        });
    }

    search(event) {
        axios.get('api/estate/search',
            {
            params: {
                country: this.state.searchCountry,
                city: this.state.searchCity,
                layout: this.state.searchLayout,
                price: this.state.searchPrice
            }
        })
        .then(response => {
            this.setState({
                estates: response.data
            });

            this.makePagination(response.data);
        });
    }

    clean(event) {
        this.setState({
            searchCity: '',
            searchCountry: '',
            searchLayout: '',
            searchPrice: 0
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

    render() {
        let tableTemplate;

        function makeColumns(row, i) {
            return (
                <tr key={i} onClick={handleClick.bind(this, row._id)}>
                    <td>{row.Country}</td>
                    <td>{row.City}</td>
                    <td>{row.layout}</td>
                    <td>{row.price}</td>
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
                                Страна:
                                <input
                                    value={this.state.searchCountry}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by country"
                                    onChange={this.changeCountry}
                                />
                            </label>
                            <label>
                                Город:
                                <input
                                    value={this.state.searchCity}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by city"
                                    onChange={this.changeCity}
                                />
                            </label>
                            <label>
                                Планировка:
                                <input
                                    value={this.state.searchLayout}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by layout"
                                    onChange={this.changeLayout}
                                />
                            </label>
                            <label>
                                Стоимость, до:
                                <input
                                    value={this.state.searchPrice}
                                    type="text"
                                    className="form-control"
                                    placeholder="Search estates by price"
                                    onChange={this.changePrice}
                                />
                            </label>
                        </div>
                        <button onClick={this.search}>Поиск</button>
                        <button onClick={this.clean}>Очистить</button>
                    </div>
                </div>
                <h2>
                    Популярное
                </h2>
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <td>Страна</td>
                            <td>Город</td>
                            <td>Планировка</td>
                            <td>Цена</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTemplate}
                    </tbody>
                </table>
                <button className="btn btn-default" onClick={this.loadNextPage.bind(this)}>Next Page</button>
                <button className="btn btn-default" onClick={this.loadPrevPage.bind(this)}>Prev Page</button>
            </div>
        );
    }
}

if (document.getElementById('estates')) {
    ReactDOM.render(<Estates />, document.getElementById('estates'));
}
