import React, { useState } from 'react';
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ReportIcon from '@mui/icons-material/Report';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
    const changeclass = () => props.MiniLeft()
    const [icon, setIcon] = useState(true);
    const [leftwidth, setleftwidth] = useState('main-area');
    const [display, setDisplay] = useState('show');
    const [iconMargin, setIconMargin] = useState('closeIcon');
    const [iconPadding, setIconPadding] = useState('');
    const iconClicked = () => {
        icon === true ? setIcon(false) : setIcon(true);
        leftwidth === 'main-area' ? setleftwidth('mini-area') : setleftwidth('main-area');
        display === 'show' ? setDisplay('hide') : setDisplay('show');
        iconMargin === 'closeIcon' ? setIconMargin('barIcon') : setIconMargin('closeIcon');
        iconPadding === '' ? setIconPadding('padding-right') : setIconPadding('');
        changeclass();
    }

    return (
        <div className='sidebar'>
            <div className={leftwidth}>
                <div className="sidebar-menu">
                    <span className={iconMargin} onClick={iconClicked}>
                        {icon === true ? <CloseIcon className='iconSize' /> : <MenuIcon className='iconSize' />}

                    </span>
                    <h4 className={display}>Dashboard</h4>
                    <ul className='menus'>
                        <li>
                            <div>
                                <HomeIcon />
                                <span className={iconPadding}>
                                    <Link to="/home" className={`links`}>Home</Link>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AnalyticsIcon />
                                <span className={iconPadding}>
                                    <Link to="/analytics" className="links"> Analytics</Link>
                                </span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AttachMoneyIcon />
                                <span className={iconPadding}>Sales</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4 className={display}>Quick menu</h4>
                    <ul className='menus'>
                        <li>
                            <div>
                                <PersonIcon />
                                <span className={iconPadding}>Users</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ProductionQuantityLimitsIcon />
                                <span className={iconPadding}>Products</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AttachMoneyIcon />
                                <span className={iconPadding}>Transactions</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <BarChartIcon />
                                <span className={iconPadding}>Reports</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4 className={display}>Notification</h4>
                    <ul className='menus'>
                        <li>
                            <div>
                                <MailIcon />
                                <span className={iconPadding}>Mail</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <RateReviewIcon />
                                <span className={iconPadding}>Feedback</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <MessageIcon />
                                <span className={iconPadding}>Message</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4 className={display}>Stafs</h4>
                    <ul className='menus'>
                        <li>
                            <div>
                                <ManageAccountsIcon />
                                <span className={iconPadding}>Manage</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AnalyticsIcon />
                                <span className={iconPadding}>Analytics</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <ReportIcon />
                                <span className={iconPadding}>Report</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;