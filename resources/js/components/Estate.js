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
            btnАdd: '',
            str: []
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


            for (const property in response.data) {
                if(property != 'Estate_id' && property != '_id')
                    ;//console.log(`${property}: ${response.data[property]}`);
            }


            // this.str = Object.entries(this.article).map((property) => {
            //     if(property[0] != 'Estate_id' && property[0] != '_id')
            //     {
            //         console.log(property[1])
            //         return (
            //         <p>
            //             {property[1]}
            //         </p>
            //         )
            //     }
            //
            // })

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
                            {this.state.estate.City}
                        </p>
                        <p>
                            {this.state.estate.Address}
                        </p>
                        <p>
                            {this.state.estate.Country}
                        </p>
                        <p>
                            {this.state.estate.first_name}
                        </p>
                        <p>
                            {this.state.estate.second_name}
                        </p>
                        <p>
                            {this.state.estate.middle_name}
                        </p>
                        <p>
                            {this.state.estate.number}
                        </p>
                        <p>
                            {this.state.estate.email}
                        </p>
                        <p>
                            {this.state.estate.article_id}
                        </p>
                        <p>
                            {this.state.estate.price}
                        </p>
                        <p>
                            {this.state.estate.year_build}
                        </p>
                        <p>
                            {this.state.estate.square}
                        </p>
                        <p>
                            {this.state.estate.type_house}
                        </p>
                        <p>
                            {this.state.estate.is_primary}
                        </p>
                        <p>
                            {this.state.estate.layout}
                        </p>
                        <p>
                            {this.state.article.Name}
                        </p>
                        <p>
                            {this.state.article.Description}
                        </p>
                        <p>
                            {this.state.article.Placement_date}
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
