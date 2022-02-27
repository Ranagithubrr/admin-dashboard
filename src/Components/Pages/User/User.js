import React from 'react';
import './User.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: 'user', headerName: 'User', width: 180, renderCell: (params) => {
            return (
                <div className='userNameAndPhoto'>
                    <img className='userPhoto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS785biEGWYfQ3kCbvts_QRuNPn7IJpvovN4A&usqp=CAU" alt="" />
                    {params.row.user}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 250 },
    {
        field: 'status', headerName: 'Status', width: 130, renderCell: (params) => {
            return (
                <div className='activeStatus'>

                    {
                        params.row.status === 'active' ? <div class="active"></div> : <div className="deactive"></div>
                    }
                    {params.row.status}
                </div>
            )
        }
    },
    { field: 'transaction', headerName: 'Transaction', width: 130 },
    {
        field: 'action', headerName: 'Action', width: 130, renderCell: () => {
            return (
                <div className='actionArea'>
                    <button className='editBtn'>Edit</button>
                    {
                        <DeleteIcon className='delBtn' />
                    }
                </div>
            )
        }
    },

];

const rows = [
    { id: 1, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
    { id: 2, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
    { id: 3, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'offline', transaction: '$120' },
    { id: 4, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
    { id: 5, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'offline', transaction: '$120' },
    { id: 6, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
    { id: 7, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'disabled', transaction: '$120' },
    { id: 8, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'offline', transaction: '$120' },
    { id: 9, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
    { id: 10, user: 'Jon Snow', email: 'jonsnow1234@gmail.com', status: 'active', transaction: '$120' },
];

const User = () => {
    return (
        <div style={{ height: 500, width: '95%' }}>
            <DataGrid
                disableSelectionOnClick
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
};

export default User;