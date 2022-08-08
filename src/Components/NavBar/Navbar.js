import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { BsChevronDown, FiBarChart2, BiSearch } from 'react-icons/all';
import Badge from '@mui/material/Badge';
import UserAccount from '../UserAccount/UserAccount';
import Notification from '../Notification/Notification';
import SearchBar from './SearchBar/SearchBar';






const Navbar = () => {

    const [middleShow, setmiddleShow] = useState(''); // this is for mobile sidebar area
    const [overlayShow, setOverlayShow] = useState('overlayHidden'); // this is for overlay
    const [showSearch, setShowSearch] = useState(''); // this is for searchbar area

    const overlayFunc = (e) =>{
        e == 'show' ? setOverlayShow('') : setOverlayShow('overlayHidden')
    }
    const searchbuttonClicked = () =>{
        console.log('button clicked');
        showSearch == 'hidesearchBarArea' ? setShowSearch('') : setShowSearch('hidesearchBarArea');
        console.log(showSearch);
        setOverlayShow('overlayHidden');
        overlayFunc('show');
    }
    return (
        <div className='navbar'>
            <div className={`overlay ${overlayShow}`}></div>
            <SearchBar Searchshow={showSearch} OverlayFunc={overlayFunc}/>
            <div className="left">
                <span id="barIcon" onClick={() => setmiddleShow('middleShow')}><i class="fas fa-bars"></i></span>
                <Link to="/" className='logo'>do<span className='ar'>ar</span></Link>
            </div>
            <div className={`middle ${middleShow}`}>
                <div class="sidebarLogoArea">
                    <a href="#" id="sidebarLogo" className='logo'>do<span className='ar'>ar</span></a>
                    <span id="crossIcon" onClick={() => setmiddleShow('')}><i class="fas fa-times"></i></span>
                </div>
                <h4 className='mainNavigation'>main navigation</h4>
                <ul>
                    <li>
                        <div class="dropdown">
                            <a class="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dashboard <span className='dropIcon'><BsChevronDown /></span>
                            </a>
                            
                            
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> sales monitoring</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> website analytics</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> criptocurrency</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> Helpdesk management</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> ecommerce dashboard</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <a class="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Apps <span className='dropIcon'><BsChevronDown /></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> calender</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> chat</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> contacts</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> file manager</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> mail</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <a class="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pages <span className='dropIcon'><BsChevronDown /></span>
                            </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> sales monitoring</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> website analytics</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> criptocurrency</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> Helpdesk management</a>
                                <a class="dropdown-item" href="#"><span className='icon'><FiBarChart2 /></span> ecommerce dashboard</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">Collections</a></li>
                </ul>

            </div>
            <div className="right">

                <ul className='rightMenu'>
                    <li><span>
                        <BiSearch onClick={()=> searchbuttonClicked()}/>
                    </span>
                    </li>
                    <li>
                        <span>

                            <Notification IconName="BsChatSquare" DisplayName="MESSAGES" />

                        </span>
                    </li>
                    <li>
                        <span>
                            <Notification IconName="MdNotificationsNone" DisplayName="Notifications" />
                        </span>
                    </li>
                    <UserAccount />
                </ul>
            </div>

        </div >
    );
};

export default Navbar;