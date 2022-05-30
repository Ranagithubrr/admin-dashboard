import React from 'react';
import { FiBarChart2 } from 'react-icons/all';
import './RecentEarnings.css';

const RecentEarnings = () => {
    return (
        <div className='recentEarnings'>
            <div className="recentEarningsTop">
                <div className="recentEarningsTopLeft">
                    <h5>Your Most Recent Earnings</h5>
                    <p>Your sales and referral earnings over the last 30 days</p>
                </div>
                <div className="recentEarningsTopRight">
                    <button className='range'>Range</button>
                    <button className='period'>Period</button>
                </div>
            </div>
            <div className="recentEarningsMid mt-4">
                <div className="earningChartAreas">
                    <div className="earningChartAreasLeft">
                        <div className="barIconArea firstBar">
                            <FiBarChart2 />
                        </div>
                    </div>
                    <div className="earningChartAreasRight">
                        <h6>GROSS EARNINGS</h6>
                        <h4>$1,958,104</h4>
                    </div>
                </div>
                <div className="earningChartAreas">
                    <div className="earningChartAreasLeft">
                        <div className="barIconArea secondBar">
                            <FiBarChart2 />
                        </div>
                    </div>
                    <div className="earningChartAreasRight">
                        <h6>GROSS EARNINGS</h6>
                        <h4>$1,958,104</h4>
                    </div>
                </div>
                <div className="earningChartAreas ">
                    <div className="earningChartAreasLeft">
                        <div className="barIconArea thirdBar">
                            <FiBarChart2 />
                        </div>
                    </div>
                    <div className="earningChartAreasRight">
                        <h6>GROSS EARNINGS</h6>
                        <h4>$1,958,104</h4>
                    </div>
                </div>
            </div>
            <div className="recentEarningsBottom"></div>
        </div>
    );
};

export default RecentEarnings;