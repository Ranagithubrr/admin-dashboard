import React from 'react';
import './members.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import membersData from './membersData.json';

const Members = () => {
    return (
        <div className='memberArea'>
            <div className="card">
                <h4>New Join Member</h4>

                {
                    membersData.map((item) => {
                        return (<>
                            <div className="members">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                                <div className='details'>
                                    <h5>{item.name}</h5>
                                    <p>{item.role}</p>
                                </div>
                                <button className='button'> <VisibilityIcon className='icon' /> Display</button>
                            </div>
                        </>)
                    })
                }
            </div>
        </div>
    );
};

export default Members;