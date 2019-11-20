import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Estate extends Component {
    constructor() {
        super();

        this.state = {
            estate: [],
            article: []
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
    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className="container">
                <p>
                    {this.state.estate.City}
                    {this.state.estate.Address}
                    {this.state.estate.Country}
                    {this.state.estate.first_name}
                    {this.state.estate.second_name}
                    {this.state.estate.middle_name}
                    {this.state.estate.number}
                    {this.state.estate.email}
                    {this.state.estate.article_id}
                    {this.state.estate.price}
                    {this.state.estate.year_build}
                    {this.state.estate.square}
                    {this.state.estate.type_house}
                    {this.state.estate.is_primary}
                    {this.state.estate.layout}
                </p>
                <p>
                    {this.state.article.Name}
                    {this.state.article.Description}
                    {this.state.article.Placement_date}
                </p>
            </div>
        );
    }
}

if (document.getElementById('estate')) {
    ReactDOM.render(<Estate />, document.getElementById('estate'));
}
