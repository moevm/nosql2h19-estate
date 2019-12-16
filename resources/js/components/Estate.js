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
    constructor(props) {
        super(props);

        this.state = {
            userId: this.props.user,
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
            axios.get('/api/articles/' + this.state.estate.article_id).then(response => {
                this.setState({
                    article: response.data
                })
            });
        });

        this.setState({btnAdd: 'Add to bookmarks'});
    }

    addArticle() {
        axios.post('/api/articles', {
            user_id: this.state.userId,
            article_id: this.state.estate.article_id
        }).
        then(response => {
            alert(response.data);
        });

        this.setState({btnAdd: 'Added to bookmarks'});
    }

    render() {
        return(
            <div className="container">
                <h2 align="center">
                    {this.state.article.Name}
                </h2>
                <div style={{display: 'table', width: '100%'}}>
                    <div className="image" style={lr}>
                        <div style={{}}>
                            <img src="https://freshome.com/wp-content/uploads/2012/06/Swedish-apartment-14.jpg" alt="Picture of estate" />
                            {this.str}
                            Description:
                            <p>
                                {this.state.article.Description}
                            </p>
                            Date of property placement:
                            <p>
                                {this.state.article.Placement_date}
                            </p>
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
                            First name: {this.state.estate.first_name}
                        </p>
                        <p>
                            Second name: {this.state.estate.second_name}
                        </p>
                        <p>
                            Middle name: {this.state.estate.middle_name}
                        </p>
                        <p>
                            Number: {this.state.estate.number}
                        </p>
                        <p>
                            Contact email: {this.state.estate.email}
                        </p>
                        <p>
                            Price: {this.state.estate.price}
                        </p>
                        <p>
                            Build date: {this.state.estate.year_build}
                        </p>
                        <p>
                            Square: {this.state.estate.square}
                        </p>
                        <p>
                            House type: {this.state.estate.type_house}
                        </p>
                        <p>
                            Is primary: {this.state.estate.is_primary}
                        </p>
                        <p>
                            Layout: {this.state.estate.layout}
                        </p>
                        <button className="btn btn-default" style={{float:'left'}} onClick={this.addArticle.bind(this)}>{this.state.btnAdd}</button>
                    </div>
                </div>

            </div>
        );
    }
}

if (document.getElementById('estate')) {
    let userId = document.getElementById('estate').getAttribute('data');
    ReactDOM.render(<Estate user={userId}/>, document.getElementById('estate'));
}
