import React from 'react';
import './transaction.css'

const Transaction = () => {
    return (
        <div className='transaction'>
            <div className="card">
                <h4>Latest Transactions</h4>
                <table className='datatable'>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Ammount</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                    <td>
                            <div className='profile'>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="myimg" />
                            <span className='membername'>Sustan Carol</span>
                            </div>
                        </td>
                        <td>24 Feb 2022</td>
                        <td>$122.00</td>
                        <td><button className='approved'>Approved</button></td>
                    </tr>

                    <tr>
                    <td>
                            <div className='profile'>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="myimg" />
                            <span className='membername'>Sustan Carol</span>
                            </div>
                        </td>
                        <td>24 Feb 2022</td>
                        <td>$122.00</td>
                        <td><button className='declined'>Declined</button></td>
                    </tr>

                    <tr>
                    <td>
                            <div className='profile'>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="myimg" />
                            <span className='membername'>Sustan Carol</span>
                            </div>
                        </td>
                        <td>24 Feb 2022</td>
                        <td>$122.00</td>
                        <td><button className='pending'>Pending</button></td>
                    </tr>
                    <tr>
                    <td>
                            <div className='profile'>
                            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="myimg" />
                            <span className='membername'>Sustan Carol</span>
                            </div>
                        </td>
                        <td>24 Feb 2022</td>
                        <td>$122.00</td>
                        <td><button className='approved'>Approved</button></td>
                    </tr>

                </table>
            </div>
        </div>
    );
};

export default Transaction;