import React from 'react';
import './Revenu.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const RevenuCard = (props) => {
    const {Topname,Ammount,Rate} = props;
    const rateper =parseInt(props.Rate);
    return (
        <div className='card'>
            <h4>{Topname}</h4>
            <h2>
                ${Ammount} 
                <span className='small-text'>{Rate}
                <span className='icon'>
                {
                    rateper > 0 ? <span style={{color:"green"}}><ArrowUpwardIcon/></span> : <span style={{color:"red"}}><ArrowDownwardIcon/></span>
                }
                </span>
                </span>
                </h2>
            <p>Compare to last month</p>
        </div>
    );
};

export default RevenuCard;