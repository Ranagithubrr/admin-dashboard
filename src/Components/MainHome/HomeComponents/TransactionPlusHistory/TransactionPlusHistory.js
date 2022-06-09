import React from 'react';
import './TransactionPlusHistory.css';
import { AiOutlineReload, BiDotsVerticalRounded ,AiOutlineMail,FiSlash,FiUser} from 'react-icons/all';
import User from '../../../../img/user.jpg';
import { ListItemSecondaryAction } from '@mui/material';


const TransactionPlusHistory = (props) => {
    const { HeaderName, TranHisData, Renderwhat } = props;
    // console.log(TranHisData);
    const MyTransactionHisData = TranHisData.slice(0, 5);
    console.log(MyTransactionHisData);
    Renderwhat == "transaction" ? console.log('transaction') : console.log('user');
    return (
        <div className='tranPlusHis'>
            <div className="tranPlusHisTop">
                <div className="tranPlusHisTopLeft">
                    <h5>{HeaderName}</h5>
                </div>
                <div className="tranPlusHisTopRight">
                    <span><AiOutlineReload /></span>
                    <span><BiDotsVerticalRounded /></span>
                </div>
            </div>
            <div className="tranPlusHisMid">
                {
                    Renderwhat == "transaction" ? MyTransactionHisData.map((item) => {
                        return(
                        <div className="transactionHistoryItems">
                            <div className="transactionHistoryItemsLeft">
                                <div className="transactionHistoryItemsLeftLeft">
                                    <img src={item.statusimg} alt="user" />
                                </div>
                                <div className="transactionHistoryItemsLeftRight">
                                    <h6>Payment {item.payment}</h6>
                                    <span>Mar 21, 2019, 3:30pm</span>
                                </div>
                            </div>
                            <div className="transactionHistoryItemsRight">
                                <h5>+{item.ammount}</h5>
                                {item.status == true ? <span className='transactionCompleted'>Completed</span> : <span className='transactionDeclined'>Declined</span>}
                            </div>
                        </div>
                        )
                    })
                     : 
                     MyTransactionHisData.map((item) => {
                        return(
                        <div className="transactionHistoryItems">
                            <div className="transactionHistoryItemsLeft">
                                <div className="transactionHistoryItemsLeftLeft">
                                    <img src={item.img} alt="user" />
                                </div>
                                <div className="transactionHistoryItemsLeftRight">
                                    <h6>{item.name}</h6>
                                    <span>Customer ID #{item.id}</span>
                                </div>
                            </div>
                            <div className="transactionUserItemsRight">
                                <a href='#'><AiOutlineMail /></a>
                                <a href='#'><FiSlash /></a>
                                <a href='#'><FiUser /></a>
                            </div>
                        </div>
                        )
                    })
                }
                <div className="viewAllTransactions">
                    <a href="#">view all transactions</a>
                </div>
            </div>
            <div className="tranPlusHisBottom"></div>
        </div>
    );
};

export default TransactionPlusHistory;