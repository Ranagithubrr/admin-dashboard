import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import './RightDrawer.css';
import { useState } from 'react';
import { FiSettings } from 'react-icons/all';

function RightDrawer() {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, true)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="rightMenuArea">
            <h3 href="#" className='logo rightLogo'>do<span className='ar'>ar</span></h3>
            <span class="tagline">TEMPLATE SKIN CUSTOMIZER</span>
            <hr />
            <div className="skinMods">
                <h6>SKIN MODE</h6>
                <div className="row">
                    <div className="col-4">
                        <button className='modeButtons lightTheme'></button>
                        <span>Light</span>
                    </div>
                    <div className="col-4">
                        <button className='modeButtons darkTheme'></button>
                        <span>Dark</span>
                    </div>
                    <div className="col-4">
                        <button className='modeButtons classicTheme'></button>
                        <span>Classic</span>
                    </div>
                    <div className="col-4 mt-2">
                        <button className='modeButtons darkTheme'></button>
                        <span>Dark</span>
                    </div>
                </div>
                <hr />
                <h6>NAVIGATION LAYOUT</h6>
                <div className="row navigation">
                    <div className="col-6"><button>horizontal</button></div>
                    <div className="col-6"><button>vertical</button></div>
                </div>
            </div>
            </div>
        </Box>
    );
    function buttonClicked(){
        console.log('clicked')
    }

    return (
        <div className="rightButton">
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <button onClick={toggleDrawer(anchor, true) } className="rightButton"><span><FiSettings className='rightSettingIcon'/></span></button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}


export default RightDrawer;