import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './RevenueChart.css';



const data = [
    {
      name: '12 FEB',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '14 FEB',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '16 FEB',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '18 FEB',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '20 FEB',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '22 FEB',
      uv: 4390,
      pv: 800,
      amt: 2500,
    },
    {
      name: '24 FEB',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '26 FEB',
      uv: 1890,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '28 FEB',
      uv: 2490,
      pv: 3000,
      amt: 2100,
    },
  ];


const RevenueChart = () => {
    return (
        <div className='RevenueChart'>
            <ResponsiveContainer width="100%" height={350}>
                <AreaChart
                    width={520}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis axisLine={false}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#0087D2" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#96F0D6" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#89D9E4" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;