import React from 'react';
import Topchart from './TopChart/Topchart';
import './Conversion.css';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/all';

const Conversion = (props) => {
    const { CardName, Ammount, ProfitPercentage } = props;
    let Percentage = parseInt(ProfitPercentage);
    return (
        <div className='col-3 conversion'>
            <div className="conversionTop">
                <h6>{CardName}</h6>
                <div className="conversionMid">
                    <h4>{Ammount}</h4>
                    {
                        Percentage > 0 ? <span className='greenText'> {ProfitPercentage} % <BsArrowUpShort size='20px' /> </span> : <span className='redText'> {ProfitPercentage} % <BsArrowDownShort size='20px' /> </span>
                    }
                    {/* <span> {ProfitPercentage} % </span> */}
                    <span className='lastWeek'> than last week</span>

                </div>
            </div>
            <div className="conversionBottom">
                <Topchart />
            </div>
        </div>
    );
};

export default Conversion;