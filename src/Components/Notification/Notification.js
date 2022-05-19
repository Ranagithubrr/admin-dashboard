import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { AiOutlineEdit, FiUser, BiHelpCircle, FaForumbee, FiSettings, GoSignOut, MdNotificationsNone, BsChatSquare } from 'react-icons/all';
import Badge from '@mui/material/Badge';
import './Notification.css';
import notificationData from '../../Data/Notification.json';

const Notification = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const notiData = notificationData.slice(1, 7);
    console.log(notiData);
    const {IconName,DisplayName} = props;
    console.log(typeof(IconName));
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <span
                    className='notification'
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Badge color="warning" badgeContent={9}>
                        {
                             IconName === "MdNotificationsNone" ? <MdNotificationsNone /> : <BsChatSquare />
                        }
                        
                    </Badge>
                </span>
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
                <div className="notificationArea">
                    <div className="top">
                        <h4 className="notificationTitle">{DisplayName}</h4>
                    </div>
                    <hr />
                    <div className="mid">
                        {
                            notiData.map(data => {
                                return(
                                    <div className="row notificationSingleArea">
                                    <div className="col-2">
                                        <img src={data.userimg} alt="user" className='notiUserImg' />
                                    </div>
                                    <div className="col-10 notifications">
                                        <span className="notificationName">{data.notiname}</span>
                                        <p>{data.text}</p>
                                        <span className='dateTime'>Mar 15 12:32 pm</span>
                                    </div>
                                </div>
                                )
                                
                            })
                        }

                    </div>
                    <hr />
                    <div className="bottom">
                        <a className='allNotificationTitle mt-2 text-center d-b'>View all {DisplayName}</a>
                    </div>
                </div>
            </Menu>
        </React.Fragment>
    );
};
export default Notification;