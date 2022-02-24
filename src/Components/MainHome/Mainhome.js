import React from 'react';
import RevenuCard from './RevenuCard/RevenuCard';
import './mainhome.css'
import ChartTop from './Chart/ChartTop';
import Members from './Members/Members';
import Transaction from './Transactions/Transaction';

const Mainhome = () => {
    const data = [
        { name: 'Page A', uv: 150, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 1900, amt: 2400 },
        { name: 'Page C', uv: 250, pv: 400, amt: 2400 },
        { name: 'Page A', uv: 760, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 360, pv: 2700, amt: 2400 },
        { name: 'Page A', uv: 660, pv: 2400, amt: 2400 },
        { name: 'Page A', uv: 460, pv: 3400, amt: 2400 },
    ]
    return (
        <>
            <div className="mainHome">
                <div className="revinu">
                <RevenuCard Topname="Revanu" Ammount="2,415" Rate="-11.4"/>
                <RevenuCard Topname="Sales" Ammount="4,415" Rate="4.4"/>
                <RevenuCard Topname="Cost" Ammount="2,385" Rate="8.4"/>
                </div>
                <ChartTop data={data} displayName="User Analytics"/>
                <div className="member-section">
                    <Members />
                    <Transaction/>
                </div>
            </div>


        </>
    )
};

export default Mainhome;