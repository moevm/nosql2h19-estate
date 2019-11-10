import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Estate extends Component {
    constructor() {
        super();

        this.state = {
            estate: null
        };
    }

    componentDidMount() {
        axios.get('/api/estates/').then(response => {
            this.setState({
                estate: response.data
            })
        });
    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className="container">
                {/*{this.state.estate}*/}
            </div>
        );
    }
}

if (document.getElementById('estate')) {
    ReactDOM.render(<Estate />, document.getElementById('estate'));
}
