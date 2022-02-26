import React, {useState} from 'react';
import './members.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import membersData from './membersData.json';




const Members = () => {



    const [member,setMember] = useState(membersData);
    
    const removeUser = (delItem) =>{
        const newUser = member.filter((oldmem,index)=>{
            return(
                index !== delItem
            )
        })
        setMember(newUser)
    }

    const reloadUser = () =>[
        setMember(membersData)
    ]

    return (
        <div className='memberArea'>
            <div className="card">
                <h4>New Join Member</h4>

                {
                    member.map((item,index) => {
                        return (
                            <div className="members" key={index}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                                <div className='details'>
                                    <h5>{item.name}</h5>
                                    <p>{item.role}</p>
                                </div>
                                <button className='button' onClick={()=>removeUser(index)}> <VisibilityIcon className='icon'/> Display</button>
                            </div>
                        )
                    })
                }
                <button type="reset" className='resetbtn' onClick={reloadUser}>Reload Users</button>
            </div>
        </div>
    );
};

export default Members;