import React from 'react';
import './TopBar.css';
import {AiOutlineMail, AiOutlinePrinter, AiOutlineFileText} from 'react-icons/all';

const MainHome = () => {
    return (
            <div className="row dashBoardArea d-flex align-items-center py-4">
                <div className="col-6 align-items-center leftSide">
                    <p>dashboard  / <span>  sales monitoring</span></p>
                    <h2 className='welcomeToDashboard'>Welcome To Dashboard</h2>
                </div>
                <div className="col-6 rightSide">
                    <button><span><AiOutlineMail /></span> email</button>
                    <button><span><AiOutlinePrinter /></span> print</button>
                    <button className='reportBtn'><span><AiOutlineFileText /></span> generate report</button>
                </div>
            </div>
    );
};

export default MainHome;