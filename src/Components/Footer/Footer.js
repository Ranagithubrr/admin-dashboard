import React from 'react';
import './footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerLeft">
                <span> &copy; DOAR 2022 MADE WITH RR</span>
            </div>
            <div className="footerRight">
                <Link to="#">LICENSES</Link>
                <Link to="#">CHANGE LOG</Link>
                <Link to="#">GET HELP</Link>
            </div>
        </div>
    );
};

export default Footer;