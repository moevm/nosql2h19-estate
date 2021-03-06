import React, { Component } from 'react';
import ReactDOM from "react-dom";

class EstateAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //user
            userId: this.props.user,
            //estate
            city: '',
            address: '',
            country: '',
            number: '',
            email: '',
            price: '',
            yearBuild: '',
            square: '',
            typeHouse: '',
            isPrimary: '',
            layout: '',
            //article
            name: '',
            description: '',
            placementDate: ''
        };
        this.changeCity = this.changeCity.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeCountry = this.changeCountry.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeYearBuild = this.changeYearBuild.bind(this);
        this.changeSquare = this.changeSquare.bind(this);
        this.changeTypeHouse = this.changeTypeHouse.bind(this);
        this.changeIsPrimary = this.changeIsPrimary.bind(this);
        this.changeLayout = this.changeLayout.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeDescription = this.changeDescription.bind(this);
        this.changePlacementDate = this.changePlacementDate.bind(this);
    }

    changeAddress(event) {
        this.setState({
            address: event.target.value
        });
    }

    changeCountry(event) {
        this.setState({
            country: event.target.value
        });
    }

    changeNumber(event) {
        this.setState({
            number: event.target.value
        });
    }

    changeEmail(event) {
        this.setState({
            email: event.target.value
        });
    }

    changePrice(event) {
        this.setState({
            price: event.target.value
        });
    }

    changeYearBuild(event) {
        this.setState({
            yearBuild: event.target.value
        });
    }

    changeSquare(event) {
        this.setState({
            square: event.target.value
        });
    }

    changeTypeHouse(event) {
        this.setState({
            typeHouse: event.target.value
        });
    }

    changeIsPrimary(event) {
        this.setState({
            isPrimary: event.target.value
        });
    }

    changeLayout(event) {
        this.setState({
            layout: event.target.value
        });
    }

    changeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    changeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }

    changePlacementDate(event) {
        this.setState({
            placementDate: event.target.value
        });
    }

    changeCity(event) {
        this.setState({
            city: event.target.value
        });
    }

    addEstate() {
        axios.post('/api/estates', {
            user_id: this.state.userId,
            City: this.state.city,
            Address: this.state.address,
            Country: this.state.country,
            number: this.state.number,
            price: this.state.price,
            year_build: this.state.yearBuild,
            square: this.state.square,
            type_house: this.state.typeHouse,
            is_primary: this.state.isPrimary,
            layout: this.state.layout,
            Name: this.state.name,
            Description: this.state.description,
            Placement_date: this.state.placementDate
        }).
        then(response => {
            alert('Недвижимость добавлена');
        });
    }

    render() {
        return(
            <div className="container">
                <div className="form-group">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <label>
                                City:
                                <input value={this.state.city}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeCity}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Address:
                                <input value={this.state.address}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeAddress}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Country:
                                <input value={this.state.country}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeCountry}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Number:
                                <input value={this.state.number}
                                       type="tel"
                                       className="form-control"
                                       onChange={this.changeNumber}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Email:
                                <input value={this.state.email}
                                       type="email"
                                       className="form-control"
                                       onChange={this.changeEmail}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Price:
                                <input value={this.state.price}
                                       type="number"
                                       className="form-control"
                                       onChange={this.changePrice}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Year of build:
                                <input value={this.state.yearBuild}
                                       type="number"
                                       className="form-control"
                                       onChange={this.changeYearBuild}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Square:
                                <input value={this.state.square}
                                       type="number"
                                       className="form-control"
                                       onChange={this.changeSquare}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                House type:
                                <input value={this.state.typeHouse}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeTypeHouse}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Is primary:
                                <input value={this.state.isPrimary}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeIsPrimary}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Layout:
                                <input value={this.state.layout}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeLayout}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Article name:
                                <input value={this.state.name}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeName}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Description:
                                <input value={this.state.description}
                                       type="text"
                                       className="form-control"
                                       onChange={this.changeDescription}
                                       required
                                />
                            </label>
                        </li>
                        <li className="list-group-item">
                            <label>
                                Date of placement:
                                <input value={this.state.placementDate}
                                       type="date"
                                       className="form-control"
                                       onChange={this.changePlacementDate}
                                       required
                                />
                            </label>
                        </li>
                    </ul>
                    <button onClick={this.addEstate.bind(this)}>Add</button>
                </div>
            </div>
        );
    }
}

if (document.getElementById('estateAdd')) {
    let userId = document.getElementById('estateAdd').getAttribute('data');
    ReactDOM.render(<EstateAdd user={userId}/>, document.getElementById('estateAdd'));
}
