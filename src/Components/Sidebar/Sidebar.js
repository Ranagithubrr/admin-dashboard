import React from 'react';
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

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="main-area">
                <div className="sidebar-menu">
                    <h4>Dashboard</h4>
                    <ul className='menus'>
                        <li>
                            <div><HomeIcon /><span>Home</span></div>
                        </li>
                        <li>
                            <div><AnalyticsIcon /><span>Analytics</span></div>
                        </li>
                        <li>
                            <div><AttachMoneyIcon /><span>Sales</span></div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4>Quick menu</h4>
                    <ul className='menus'>
                        <li>
                            <div><PersonIcon /><span>Users</span></div>
                        </li>
                        <li>
                            <div><ProductionQuantityLimitsIcon /><span>Products</span></div>
                        </li>
                        <li>
                            <div><AttachMoneyIcon /><span>Transactions</span></div>
                        </li>
                        <li>
                            <div><BarChartIcon /><span>Reports</span></div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4>Notification</h4>
                    <ul className='menus'>
                        <li>
                            <div><MailIcon /><span>Mail</span></div>
                        </li>
                        <li>
                            <div><RateReviewIcon /><span>Feedback</span></div>
                        </li>
                        <li>
                            <div><MessageIcon /><span>Message</span></div>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h4>Stafs</h4>
                    <ul className='menus'>
                        <li>
                            <div><ManageAccountsIcon /><span>Manage</span></div>
                        </li>
                        <li>
                            <div><AnalyticsIcon /><span>Analytics</span></div>
                        </li>
                        <li>
                            <div><ReportIcon /><span>Report</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;