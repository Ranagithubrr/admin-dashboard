import * as React from 'react';
import './UserAccount.css';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import {AiOutlineEdit,FiUser,BiHelpCircle,FaForumbee,FiSettings,GoSignOut} from 'react-icons/all';

export default function UserAccount() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <button 
            className='user'
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            DF
          </button>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.6,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
       <div className="mainArea">
        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="userPhoto" className='userPhoto'/>
        <h4 className='userName'>Masud Rana</h4>
        <span className='userTitle'>Web Developer</span>
        <a href="#"><span><AiOutlineEdit /></span>Edit Profile</a>
        <a href="#"><span><FiUser /></span>View Profile</a>
        <hr />
        <a href="#"><span><BiHelpCircle /></span>Help Center</a>
        <a href="#"><span><FaForumbee /></span>Forum</a>
        <a href="#"><span><FiSettings /></span>Account Setting</a>
        <a href="#"><span><FiSettings /></span>Privacy Setting</a>
        <a href="#"><span><GoSignOut /></span>Sign Out</a>
       </div>
      </Menu>
    </React.Fragment>
  );
}