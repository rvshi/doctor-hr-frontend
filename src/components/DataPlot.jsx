import React from 'react';
import {
    ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line
} from 'recharts';
import moment from 'moment';

const style = {
    margin: '16px 0'
}

const DataPlot = ({ data }) => {
    const chartData = data.map(d => {
        return {
            date: Date.parse(d[0]),
            hr: d[1]
        };
    }),
        format = timestamp => moment(timestamp)
            .format('MM/DD/YY h:mm a');

    return (
        <ResponsiveContainer width='90%' height={250} style={style}>
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
                    fontFamily="inherit"
                />
                <Tooltip
                    labelFormatter={format}
                    fontFamily="inherit"
                />
                <Line name="Heart Rate (bpm)" type="monotone" dataKey="hr" stroke="#8884d8" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default DataPlot;