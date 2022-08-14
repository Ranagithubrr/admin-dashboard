import React from 'react';
import RevenueChart from './RevenueChart/RevenueChart';
import './RevenueGroth.css';
import {Link} from 'react-router-dom';

const RevenueGroth = () => {
    return (
        <div className='revenueGrowth'>
            <div className="topGrowth">
                <div className="topGrowthLeft">
                    <h6>Account & Monthly Recurring Revenue Growth</h6>
                </div>
                <div className="topGrowthRight">
                    <span className="rounds blue"></span>
                    <div className='growthText'><span>growth actual</span></div>
                    <span className="rounds green"></span>
                    <div className='growthText'><span>actual</span></div>
                    <span className="rounds gray"></span>
                    <div className='growthText'><span>plan</span></div>
                </div>
            </div>
            <div className="midGrowth">
                
                <div className="midGrowthLeft">
                    <h2>$620,076</h2>
                    <h5>MRR GROWTH</h5>
                    <p>Measure How Fast You’re Growing Monthly Recurring Revenue. <Link to="#">Learn More</Link></p>
                </div>
                <div className="midGrowthRight">
                <h2>$1,200</h2>
                    <h5>AVG. MRR/CUSTOMER</h5>
                    <p>The revenue generated per account on a monthly or yearly basis. <Link to="#"> Learn More</Link></p>
                </div>
            </div>
            <div className="bottomGrowth">
                <RevenueChart />
            </div>
        </div >
    );
};

export default RevenueGroth;