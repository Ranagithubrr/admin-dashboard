import React from 'react';
import './topbar.css';
// import NotificationsIcon from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import { Avatar, Badge, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';

const settings = ['Profile', 'Account', 'Dashboard', 'Help', 'Logout'];

const Topbar = () => {

    const [anchorElUser, setAnchorElUser] = React.useState(null);

  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return (
        <div className='wrapper'>
            <div className="main">
                <div className="left">
                    <Link to="/" className='logoLink'>
                        <span className='logo'>R<span className='leftR'>a</span>na.R<span className='lastR'>R</span></span>
                    </Link>

                </div>
                <div className="right">

                    <Badge badgeContent={5} color="primary" className="icons">
                        <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={3} color="primary" className="icons">
                        <LanguageIcon />
                    </Badge>
                    <SettingsIcon className='icons' />
                    <Avatar className="avatarimg" onClick={handleOpenUserMenu} alt="R" src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />


                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting,index) => (
                            <Link to={setting === 'Logout' ? 'sign-in':setting} className='menulink' key={index}>
                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                            </Link>
                           
                        ))}
                    </Menu>


                </div>
            </div>

        </div>
    );
};

export default Topbar;