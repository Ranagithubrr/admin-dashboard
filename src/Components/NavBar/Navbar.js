import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import { BsChevronDown, FiBarChart2, BiSearch, HiOutlineClock, IoIosApps, BiCube, BiBox } from 'react-icons/all';
import UserAccount from '../UserAccount/UserAccount';
import Notification from '../Notification/Notification';
import SearchBar from './SearchBar/SearchBar';


const Navbar = () => {

    const [middleShow, setmiddleShow] = useState(''); // this is for mobile sidebar area
    const [overlayShow, setOverlayShow] = useState('overlayHidden'); // this is for overlay
    const [showSearch, setShowSearch] = useState(''); // this is for searchbar area

    const overlayFunc = (e) => {
        e === 'show' ? setOverlayShow('') : setOverlayShow('overlayHidden')
    }
    const searchbuttonClicked = () => {
        console.log('button clicked');
        showSearch === 'hidesearchBarArea' ? setShowSearch('') : setShowSearch('hidesearchBarArea');
        console.log(showSearch);
        setOverlayShow('overlayHidden');
        overlayFunc('show');
    }
    return (
        <div className='navbar'>
            <div className={`overlay ${overlayShow}`}></div>
            <SearchBar Searchshow={showSearch} OverlayFunc={overlayFunc} />
            <div className="left">
                <span id="barIcon" onClick={() => setmiddleShow('middleShow')}><i className="fas fa-bars"></i></span>
                <Link to="/" className='logo'>do<span className='ar'>ar</span></Link>
            </div>
            <div className={`middle ${middleShow}`}>
                <div className="sidebarLogoArea">
                    <Link to="#" id="sidebarLogo" className='logo'>do<span className='ar'>ar</span></Link>
                    <span id="crossIcon" onClick={() => setmiddleShow('')}><i className="fas fa-times"></i></span>
                </div>
                <h4 className='mainNavigation'>main navigation</h4>
                <ul>
                    <li>
                        <div className="dropdown">
                            <Link to="#" className="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span> <span className="icon"><HiOutlineClock /></span>  <span className='menuText'>Dashboard</span></span> <span className='dropIcon'><BsChevronDown /></span>
                            </Link>


                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <Link to="#" className="dropdown-item" ><span className='icon'><FiBarChart2 /></span> sales monitoring</Link>
                                <Link to="#" className="dropdown-item"><span className='icon'><FiBarChart2 /></span> website analytics</Link>
                                <Link to="#" className="dropdown-item"><span className='icon'><FiBarChart2 /></span> criptocurrency</Link>
                                <Link to="#" className="dropdown-item"><span className='icon'><FiBarChart2 /></span> Helpdesk management</Link>
                                <Link to="#" className="dropdown-item"><span className='icon'><FiBarChart2 /></span> ecommerce dashboard</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <Link to="#" className="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span> <span className="icon"><BiCube /></span>  <span className='menuText'>Apps</span></span> <span className='dropIcon'><BsChevronDown /></span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span> calender</Link>
                                <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span> chat</Link>
                                <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span> contacts</Link>
                                <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span> file manager</Link>
                                <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span> mail</Link>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown">
                            <Link to="#" className="dropLink" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span> <span className="icon"><IoIosApps /></span>  <span className='menuText'>Pages</span></span> <span className='dropIcon'><BsChevronDown /></span>
                            </Link>

                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="triangle"></div>
                                <div className="dropdown-menu-inner-area">
                                    <div className="dropdown-menu-inner">
                                        <h4>Authentication</h4>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>sign in</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Sign up</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>verify account</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>forgot password</Link>
                                    </div>
                                    <div className="dropdown-menu-inner inner-right">
                                    <h4>Error pages</h4>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>404 page not found</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>500 internal server</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>503 Service Unavailable</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>505 Forbidden</Link>
                                    </div>

                                </div>
                                <div className="dropdown-menu-inner-area">
                                    <div className="dropdown-menu-inner">
                                        <h4>User pages</h4>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>View Profile</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Connections</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Groups</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Events</Link>
                                    </div>
                                    <div className="dropdown-menu-inner inner-right">
                                    <h4>other pages</h4>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Timeline</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Pricing</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Help Center</Link>
                                        <Link className="dropdown-item" to="#"><span className='icon'><FiBarChart2 /></span>Invoice</Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <Link to="#">
                            <span><span className="icon"><BiCube /></span><span className='menuText'>Components</span></span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span><span className="icon"><BiBox /></span><span className='menuText'>Collections</span></span>
                        </Link>
                    </li>
                </ul>

            </div>
            <div className="right">

                <ul className='rightMenu'>
                    <li><span>
                        <BiSearch onClick={() => searchbuttonClicked()} />
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