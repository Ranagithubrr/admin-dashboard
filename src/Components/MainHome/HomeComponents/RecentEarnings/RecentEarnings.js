import React from 'react';
import { FiBarChart2 } from 'react-icons/all';
import './RecentEarnings.css';

const RecentEarnings = () => {
    return (
        <div className='recentEarnings'>
            <div className="recentEarningsInner">
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
            <div className="recentEarningsMid">
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
                        <h6>TAX WITHHELD</h6>
                        <h4>$234,769.50</h4>
                    </div>
                </div>
                <div className="earningChartAreas ">
                    <div className="earningChartAreasLeft">
                        <div className="barIconArea thirdBar">
                            <FiBarChart2 />
                        </div>
                    </div>
                    <div className="earningChartAreasRight">
                        <h6>NET EARNINGS</h6>
                        <h4>$1,608,469.50</h4>
                    </div>
                </div>
            </div>
            <div className="recentEarningsBottom">
                <table className='leftAlignTable'>
                    <thead>
                        <tr>
                            <th>date</th>
                            <th>sales count</th>
                            <th>gross earnings</th>
                            <th>tax withheld</th>
                            <th>net earnings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                        <tr>
                            <td>03/05/2022</td>
                            <td className='salesCount'>1,050</td>
                            <td className="grossEarnings">+ $32,580.00</td>
                            <td className='taxWithheld'>- $3,023.10	</td>
                            <td>$28,670.90  4.5%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
           
        </div>
    );
};

export default RecentEarnings;