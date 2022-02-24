import React from 'react';
import './members.css';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Members = () => {
    return (
        <div className='memberArea'>
            <div className="card">
                <h4>New Join Member</h4>
                <div className="members">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    <div className='details'>
                        <h5>Anna Keller</h5>
                        <p>Software Engineer</p>
                    </div>
                    <button className='button'> <VisibilityIcon className='icon'/> Display</button>
                </div>
                <div className="members">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    <div className='details'>
                        <h5>Anna Keller</h5>
                        <p>Software Engineer</p>
                    </div>
                    <button className='button'> <VisibilityIcon className='icon'/> Display</button>
                </div>
                <div className="members">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    <div className='details'>
                        <h5>Anna Keller</h5>
                        <p>Software Engineer</p>
                    </div>
                    <button className='button'> <VisibilityIcon className='icon'/> Display</button>
                </div>
                <div className="members">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    <div className='details'>
                        <h5>Anna Keller</h5>
                        <p>Software Engineer</p>
                    </div>
                    <button className='button'> <VisibilityIcon className='icon'/> Display</button>
                </div>
                <div className="members">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    <div className='details'>
                        <h5>Anna Keller</h5>
                        <p>Software Engineer</p>
                    </div>
                    <button className='button'> <VisibilityIcon className='icon'/> Display</button>
                </div>
            </div>
        </div>
    );
};

export default Members;