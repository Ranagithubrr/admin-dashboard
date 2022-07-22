import React from 'react';
import './RealTimeSales.css';
const RealTimeSales = () => {
    return (
        <div className='realTimeSales'>
            <div className="realTimeSalesTop">
                <div className="realTimeSalesTopLeft">
                    <h5>real-time sales</h5>
                </div>
                <div className="realTimeSalesTopRight">
                    <span>
                        <div className="round-shape shapeLeft"></div>
                        today
                    </span>
                    <span>
                        <div className="round-shape shapeRight"></div>
                        yesterday
                    </span>
                </div>
            </div>
            <div className="realTimeSalesMid">
                <div className="realTimeSalesMidLeft">
                    <h3>$150,200 <span>0.20%</span></h3>
                    <p>TOTAL SALES</p>
                </div>
                <div className="realTimeSalesMidRight">
                <h3>$21,880<span>1.04%</span></h3>
                    <p>AVG. SALES PER DAY</p>
                </div>
            </div>
            <div className="realTimeSalesBottom">
                <h6>This chart is currently on devlopment</h6>
            </div>
        </div>
    );
};

export default RealTimeSales;