import React from 'react';
import './Navbar.css';
import { BsChevronDown, FiBarChart2, BiSearch, BsChatSquare, MdNotificationsNone } from 'react-icons/all';
import Badge from '@mui/material/Badge';
import UserAccount from '../UserAccount/UserAccount';
import Notification from '../Notification/Notification';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <a href="#" className='logo'>do<span className='ar'>ar</span></a>
            </div>
            <div className="middle">
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
                        <BiSearch />
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