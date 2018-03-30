import React from 'react';
import {
    ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line
} from 'recharts';
import moment from 'moment';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';

const style = {
    margin: '16px 0'
}

export default class DataPlot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 5
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        const { data } = this.props;
        const size = data.length;
        const chartData = data.slice(0, this.state.display).map(d => {
            return {
                date: Date.parse(d[0]),
                hr: d[1]
            };
        }),
            format = timestamp => moment(timestamp)
                .format('MM/DD/YY h:mm a');

        return (
            <div>
                <ResponsiveContainer width='100%' height={250} style={style}>
                    <LineChart data={chartData} fontFamily="Roboto"
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            name="Date"
                            dataKey="date"
                            domain={['auto', 'auto']}
                            type='number'
                            tickFormatter={format}
                            fontFamily="inherit"
                        />
                        <YAxis
                            domain={[0, 'dataMax + 10']}
                            fontFamily="inherit"
                        />
                        <Tooltip
                            labelFormatter={format}
                            fontFamily="inherit"
                        />
                        <Line name="Heart Rate (bpm)" type="monotone" dataKey="hr" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>

                <InputLabel htmlFor="display">View: </InputLabel>
                <Select
                    native
                    value={this.state.display}
                    onChange={this.handleChange('display')}
                    inputProps={{
                        id: 'display',
                    }}
                >
                    <option value={5}>5 entries</option>
                    <option value={10}>10 entries</option>
                    <option value={25}>25 entries</option>
                    <option value={size}>All</option>
                </Select>
            </div>
        );
    }
}