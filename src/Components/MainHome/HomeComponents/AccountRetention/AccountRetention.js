import React from 'react';
import './AccountRetention.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'JAN',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'JAN',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'MAR',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'FEB',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'MAY',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'MAR',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'JUL',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'APRIL',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'SEP',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'MAY',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'NOV',
        uv: 7490,
        pv: 8300,
        amt: 2100,
    },
    {
        name: 'JUNE',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 6490,
        pv: 7300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 2490,
        pv: 7300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 6300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 2300,
        amt: 2100,
    },
];

const AccountRetention = () => {
    return (
        <div className='accountRetention'>
            <div className="accountRetensionTop">
                <h4>Account Retention</h4>
                <p>Number of customers who have active subscription with you.</p>
            </div>
            <div className="accountRetensionMid">
                <ResponsiveContainer width="100%" height={300}>


                    <BarChart width={350} height={280} data={data}>
                        <XAxis xAxisId="0" dataKey="name" />
                        <Bar dataKey="uv" fill="#69b2f8" barSize={12} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="accountRetensionBottom">
                <div className="accountRetensionBottomLeft">
                    <h4>$1,680.50</h4>
                    <span className="expensions">EXPANSIONS</span>
                    <p>Customers who have upgraded the level of your products or service.</p>
                </div>
                <div className="accountRetensionBottomRight">
                    <h4>$1,680.50</h4>
                    <span className="cancellations">CANCELLATIONS</span>
                    <p>Customers who have upgraded the level of your products or service.</p>
                </div>
            </div>
        </div>
    );
};

export default AccountRetention;