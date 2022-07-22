import React from 'react';
import {FiDownload} from 'react-icons/all';
import './DownloadEarnings.css';

const DownloadEarnings = () => {
    return (
        <div className='downloadEarnings mt-2'>
            <div className="downloadEarningsLeft">
                <span> <FiDownload /></span>
               
            </div>
            <div className="downloadEarningsRight">
                <h5>Download your earnings in CSV format.</h5>
                <p>Open it in a spreadsheet and perform your own calculations, graphing etc. The CSV file contains additional details, such as the buyer location.</p>
            </div>
        </div>
    );
};

export default DownloadEarnings;