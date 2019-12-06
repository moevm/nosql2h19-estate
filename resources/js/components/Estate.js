import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const lr =  {
    display: 'table-cell',
    verticalAlign: 'top',
    width: '50%',
    height: '100%',
    padding: '20px',
};

export default class Estate extends Component {
    constructor() {
        super();

        this.state = {
            estate: [],
            article: [],
            setState: ''
        };
    }

    componentDidMount() {
        axios.get('/api' + window.location.pathname).then(response => {
            this.setState({
                estate: response.data
            });
        });

        axios.get('/api/articles/5dc7f1cbb9ca571f244d9661').then(response => {
            this.setState({
                article: response.data
            })
        });

        this.setState({btnAdd: 'Добавить в закладки'});
    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className="container">
                <div style={{display: 'table', width: '100%'}}>
                    <div className="image" style={lr}>
                        <div style={{}}>
                            <img src="https://freshome.com/wp-content/uploads/2012/06/Swedish-apartment-14.jpg" alt="Picture of estate" />
                            {this.str}
                        </div>
                    </div>
                    <div className="desc" style={lr}>
                        <p>
                            City: {this.state.estate.City}
                        </p>
                        <p>
                            Address: {this.state.estate.Address}
                        </p>
                        <p>
                            Country: {this.state.estate.Country}
                        </p>
                        <p>
                            first_name: {this.state.estate.first_name}
                        </p>
                        <p>
                            second_name: {this.state.estate.second_name}
                        </p>
                        <p>
                            middle_name: {this.state.estate.middle_name}
                        </p>
                        <p>
                            number: {this.state.estate.number}
                        </p>
                        <p>
                            email: {this.state.estate.email}
                        </p>
                        <p>
                            article_id: {this.state.article.Estate_id}
                        </p>
                        <p>
                            price: {this.state.estate.price}
                        </p>
                        <p>
                            year_build: {this.state.estate.year_build}
                        </p>
                        <p>
                            square: {this.state.estate.square}
                        </p>
                        <p>
                            type_house: {this.state.estate.type_house}
                        </p>
                        <p>
                            is_primary: {this.state.estate.is_primary}
                        </p>
                        <p>
                            layout: {this.state.estate.layout}
                        </p>
                        <p>
                            Name: {this.state.article.Name}
                        </p>
                        <p>
                            Description: {this.state.article.Description}
                        </p>
                        <p>
                            Placement_date: {this.state.article.Placement_date}
                        </p>
                        <button className="btn btn-default" style={{float:'left'}} onClick={() => this.setState({btnAdd: 'Добавлено в закладки'})}>{this.state.btnAdd}</button>
                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('estate')) {
    ReactDOM.render(<Estate />, document.getElementById('estate'));
}
