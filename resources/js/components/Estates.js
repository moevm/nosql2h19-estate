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
                <tr key={i}>
                    <td>{row.Country}</td>
                    <td>{row.City}</td>
                    <td>{row.layout}</td>
                    <td>{row.price}</td>
                    <td>
                        <button onClick={() => { handleSearch(row._id)} } className="button">Hey</button>
                    </td>
                </tr>
            );
        }

        function handleSearch(i) {
            // console.log(i);
            window.location.assign('/estates/' + i);
        }

        tableTemplate = this.state.estates.map((row, i) => {
            return makeColumns(row,i);
        });

        return(
            <div className="container">
                <table className="user-list table table-striped">
                    <thead>
                        <tr>
                            <td>Страна</td>
                            <td>Город</td>
                            <td>Планировка</td>
                            <td>Цена</td>
                            <td>Подробнее</td>
                        </tr>
                    </thead>
                    <tbody>
                        {tableTemplate}
                    </tbody>
                </table>
            </div>
        );
    }
}

if (document.getElementById('estates')) {
    ReactDOM.render(<Estates />, document.getElementById('estates'));
}
