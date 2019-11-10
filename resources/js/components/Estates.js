import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Estates extends Component {
    constructor() {
        super();

        this.state = {
            estates: []
        };
    }

    componentDidMount() {
        axios.get('/api/estates').then(response => {
            this.setState({
                estates: response.data
            })
        });
    }

    componentDidUpdate() {

    }

    render() {
        let tableTemplate;

        function makeColumns(row, i) {
            return (
                <tr key={i} onClick={}>
                    <td>{row.Country}</td>
                    <td>{row.City}</td>
                    <td>{row.layout}</td>
                    <td>{row.price}</td>
                </tr>
            );
        }

        tableTemplate = this.state.estates.map((row, i) => {
            return makeColumns(row,i);
        });

        return(
            <div className="container">
                <table border="1">

                    <tbody>
                    {tableTemplate}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Estates />, document.getElementById('root'));
}
