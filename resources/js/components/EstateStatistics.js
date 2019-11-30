import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartBar from './ChartBar';
import ChartLine from './ChartLine';
import ChartPie from "./ChartPie";

export default class EstateStatistics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartDataCityPrice: {},
            statisticsCityPrice : [],
            cities: [],
            prices1: [],
            colors1: [],
            isGraphCityPrice: null,
            chartDataSquarePrice: {},
            statisticsSquarePrice : [],
            square: [],
            prices2: [],
            colors2: [],
            isGraphSquarePrice: null,
            chartDataSellerCustomer: {},
            statisticsSellerCustomer : [],
            colors3: [],
            isGraphSellerCustomer: null
        };

        axios.get('../api/estate/city-price-get').then(response => {
            this.setState({
                statisticsCityPrice: response.data
            });
            for (let key in this.state.statisticsCityPrice) {
                this.state.cities.push(key);
                this.state.prices1.push(this.state.statisticsCityPrice[key]);
                this.state.colors1.push('rgba(255, 99, 132, 0.6)');
            }
            this.setChartCityPrice();
        });

        axios.get('../api/estate/square-price-get').then(response => {
            this.setState({
                statisticsSquarePrice: response.data
            });
            for (let key in this.state.statisticsSquarePrice) {
                this.state.square.push(key);
                this.state.prices2.push(this.state.statisticsSquarePrice[key]);
                this.state.colors2.push('rgba(55, 99, 132, 0.6)');
            }
            this.setChartSquarePrice();
        });

        axios.get('../api/estate/sellers-customers').then(response => {
            this.setState({
                statisticsSellerCustomer: response.data
            });
            this.state.colors3.push('rgba(0, 180, 0, 1.0)');
            this.state.colors3.push('rgba(180, 0, 92, 1.0)');
            this.setChartSellerCustomer();
        });
    }

    setChartCityPrice() {
        this.setState({
            chartDataCityPrice: {
                labels: this.state.cities,
                datasets: [
                    {
                        label: 'Price',
                        data: this.state.prices1,
                        backgroundColor: this.state.colors1
                    }
                ]
            },
            isGraphCityPrice: true
        });
    }

    setChartSquarePrice() {
        this.setState({
            chartDataSquarePrice: {
                labels: this.state.square,
                datasets: [
                    {
                        label: 'Price',
                        data: this.state.prices2,
                        backgroundColor: this.state.colors2
                    }
                ]
            },
            isGraphSquarePrice: true
        });
    }

    setChartSellerCustomer() {
        this.setState({
            chartDataSellerCustomer: {
                labels: [
                    'Sellers',
                    'Customers'
                ],
                datasets: [
                    {
                        label: 'Users',
                        data: this.state.statisticsSellerCustomer,
                        backgroundColor: this.state.colors3
                    }
                ]
            },
            isGraphSellerCustomer: true
        });
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return(
            <div className="container">
                <h2>
                    Зависимость цены от города
                </h2>
                {this.state.isGraphCityPrice ?
                    <ChartBar chartData={this.state.chartDataCityPrice}> </ChartBar> : <p>Подождите</p>}
                <h2>
                    Зависимость цены от площади
                </h2>
                {this.state.isGraphSquarePrice ?
                    <ChartLine chartData={this.state.chartDataSquarePrice}> </ChartLine> : <p>Подождите</p>}
                <h2>
                    Зависимость покупателей от продавцов
                </h2>
                {this.state.isGraphSellerCustomer ?
                    <ChartPie chartData={this.state.chartDataSellerCustomer}> </ChartPie> : <p>Подождите</p>}
            </div>
        );
    }
}

if (document.getElementById('estateStatistics')) {
    ReactDOM.render(<EstateStatistics />, document.getElementById('estateStatistics'));
}
