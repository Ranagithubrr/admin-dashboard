import React from 'react';
import './MainHome.css';
import {AiOutlineMail, AiOutlinePrinter, AiOutlineFileText} from 'react-icons/all';
import TopBar from './HomeComponents/TopBar/TopBar';
import Conversion from './HomeComponents/ConversionRateCard/Conversion';
import RevenueGroth from './HomeComponents/RevenueGrowth/RevenueGroth';
import AccountRetention from './HomeComponents/AccountRetention/AccountRetention';
import SalesRevenue from './HomeComponents/SalesRevenue/SalesRevenue';
import RecentEarnings from './HomeComponents/RecentEarnings/RecentEarnings';
import TranHisData from '../../Data/tranHis.json';
import NewCustmerData from '../../Data/newCustomers.json'




import './MainHome.css';
import DownloadEarnings from './HomeComponents/DownloadEarnings/DownloadEarnings';
import TransactionPlusHistory from './HomeComponents/TransactionPlusHistory/TransactionPlusHistory';

const MainHome = () => {
    return (
            <>
            <TopBar />
            <div className="row">
                <Conversion CardName="conversion rate" Ammount="0.81%" ProfitPercentage="1.2" />
                <Conversion CardName="unique purchases" Ammount="3,137" ProfitPercentage="0.7" />
                <Conversion CardName="avg. order value" Ammount="$306.20" ProfitPercentage="0.5" />
                <Conversion CardName="order quantity" Ammount="1650" ProfitPercentage="2.1" />
            </div>
            <div className="row my-2">
                <div className="col-7 pr-2 removePadding">
                    <RevenueGroth />
                </div>
                <div className="col-5  p-0">
                    <AccountRetention />
                </div>
            </div>
            <div className="row salesRevenueArea">
                <div className="col-4 p-0">
                    <SalesRevenue />
                </div>
                <div className="col-8 p-0">
                    <RecentEarnings />
                    <DownloadEarnings />
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-4 p-0">
                    <TransactionPlusHistory HeaderName="transaction history" TranHisData={TranHisData} Renderwhat="transaction"/>
                </div>
                <div className="col-4 p-0 newCustomers">
                <TransactionPlusHistory HeaderName="new customers" TranHisData={NewCustmerData} Renderwhat="user"/>
                </div>
                <div className="col-4 p-0">Real time sales</div>
            </div>
            </>
    );
};

export default MainHome;