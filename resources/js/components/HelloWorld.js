import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HelloWorld extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">Hello world!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<HelloWorld />, document.getElementById('root'));
}
