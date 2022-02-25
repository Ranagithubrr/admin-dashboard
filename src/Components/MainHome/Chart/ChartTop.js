import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Legend } from 'recharts';
import './chart.css';

const ChartTop = (props) => {

    return (
        <div className='chart-top'>
            <h4 className='chartHead'>{props.displayName}</h4>
                <LineChart width={1000} height={300} data={props.data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
        </div>
    );
};

export default ChartTop;