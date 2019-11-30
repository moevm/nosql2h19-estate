import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class ChartLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData
        };
    }

    render() {
        return(
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Square',
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

export default ChartLine;
