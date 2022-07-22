import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='fotoer'>
            <div className="footerLeft">
                <span> &copy; DOAR 2022 MADE WITH RR</span>
            </div>
            <div className="footerRight">
                <a href="#">LICENSES</a>
                <a href="#">CHANGE LOG</a>
                <a href="#">GET HELP</a>
            </div>
        </div>
    );
};

export default Footer;