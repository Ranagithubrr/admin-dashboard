import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import ChartTop from '../../MainHome/Chart/ChartTop';
import './analytics.css'

const Analytics = () => {
    const data = [
        { name: 'Page A', uv: 150, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 1900, amt: 2400 },
        { name: 'Page C', uv: 250, pv: 400, amt: 2400 },
        { name: 'Page A', uv: 760, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 360, pv: 2700, amt: 2400 },
        { name: 'Page A', uv: 660, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 460, pv: 3400, amt: 2400 },
    ]
    const radialData = [
        {
          "name": "18-24",
          "uv": 31.47,
          "pv": 2400,
          "fill": "#8884d8"
        },
        {
          "name": "25-29",
          "uv": 26.69,
          "pv": 4567,
          "fill": "#83a6ed"
        },
        {
          "name": "30-34",
          "uv": -15.69,
          "pv": 1398,
          "fill": "#8dd1e1"
        },
        {
          "name": "35-39",
          "uv": 8.22,
          "pv": 9800,
          "fill": "#82ca9d"
        },
        {
          "name": "40-49",
          "uv": -8.63,
          "pv": 3908,
          "fill": "#a4de6c"
        },
        {
          "name": "50+",
          "uv": -2.63,
          "pv": 4800,
          "fill": "#d0ed57"
        },
        {
          "name": "unknow",
          "uv": 6.67,
          "pv": 4800,
          "fill": "#ffc658"
        }
      ]
      
    return (
        <div>
            <ChartTop data={data} displayName="User Analytics" />
            <div className="twoChart">
                <div className="left">
                    <ResponsiveContainer width="100%" height="76%">
                        <BarChart width={760} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="right">
                <ResponsiveContainer width="100%" height="76%">
                    <RadialBarChart
                        width={730}
                        height={250}
                        innerRadius="10%"
                        outerRadius="80%"
                        data={radialData}
                        startAngle={180}
                        endAngle={0}
                    >
                        <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
                        <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="left" />
                        <Tooltip />
                    </RadialBarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Analytics;