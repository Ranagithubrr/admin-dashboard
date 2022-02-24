import React from 'react';
import './topbar.css';
// import NotificationsIcon from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar, Badge } from '@mui/material';

const Topbar = () => {
    return (
        <div className='wrapper'>
            <div className="main">
                <div className="left">
                    <span className='logo'>R<span className='leftR'>a</span>na.R<span className='lastR'>R</span></span>
                </div>
                <div className="right">

                    <Badge badgeContent={5} color="primary" className="icons">
                    <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={3} color="primary" className="icons">
                    <LanguageIcon />
                   
                    </Badge>
                    <Badge badgeContent={5} color="primary" className="icons">
                    <SettingsIcon />
                    </Badge>
                    <Avatar className="avatarimg" alt="R" src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />
                </div>
            </div>

        </div>
    );
};

export default Topbar;