import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class ChartBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData
        };
    }

    render() {
        return(
            <div className="chart">
                <Bar
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Cities',
                            fontSize: 25
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default ChartBar;
