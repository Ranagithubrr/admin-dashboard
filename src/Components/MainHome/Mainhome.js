import React from 'react';
import './MainHome.css';
import { AiOutlineMail, AiOutlinePrinter, AiOutlineFileText } from 'react-icons/all';
import TopBar from './HomeComponents/TopBar/TopBar';
import Conversion from './HomeComponents/ConversionRateCard/Conversion';
import RevenueGroth from './HomeComponents/RevenueGrowth/RevenueGroth';
import AccountRetention from './HomeComponents/AccountRetention/AccountRetention';
import SalesRevenue from './HomeComponents/SalesRevenue/SalesRevenue';
import RecentEarnings from './HomeComponents/RecentEarnings/RecentEarnings';
import TranHisData from '../../Data/tranHis.json';
import NewCustmerData from '../../Data/newCustomers.json'
import DownloadEarnings from './HomeComponents/DownloadEarnings/DownloadEarnings';
import TransactionPlusHistory from './HomeComponents/TransactionPlusHistory/TransactionPlusHistory';
import RealTimeSales from './HomeComponents/RealTimSales/RealTimeSales';



import './MainHome.css';

const MainHome = () => {
    return (
        <>
            <TopBar />
            <div className="row" id="conversationSection">
                <div className="col-12 col-md-6 col-lg-3  mt-2 mt-md-0 px-0 px-md-1">
                    <Conversion CardName="conversion rate" Ammount="0.81%" ProfitPercentage="1.2" />
                </div>
                <div className="col-12 col-md-6 col-lg-3  mt-2 mt-md-0 px-0 px-md-1">
                    <Conversion CardName="unique purchases" Ammount="3,137" ProfitPercentage="0.7" />
                </div>
                <div className="col-12 col-md-6 col-lg-3  mt-2 mt-md-0 px-0 px-md-1">
                    <Conversion CardName="avg. order value" Ammount="$306.20" ProfitPercentage="0.5" />
                </div>
                <div className="col-12 col-md-6 col-lg-3  mt-2 mt-md-0 px-0 px-md-1">
                    <Conversion CardName="order quantity" Ammount="1650" ProfitPercentage="2.1" />
                </div>




            </div>
            <div className="row my-2">
                <div className="col-12 col-lg-7 pr-2 removePadding">
                    <RevenueGroth />
                </div>
                <div className="col-12 col-lg-5 mt-2 mt-md-0 p-0">
                    <AccountRetention />
                </div>
            </div>
            <div className="row salesRevenueArea">
                <div className="col-12 col-lg-4 p-0">
                    <SalesRevenue />
                </div>
                <div className="col-12 col-lg-8 p-0  mt-2 mt-md-0">
                    <RecentEarnings />
                    <DownloadEarnings />
                </div>
            </div>
            <div className="row mb-5 no-gutters">
                <div className="col-12 col-lg-4 p-0">
                    <TransactionPlusHistory HeaderName="transaction history" TranHisData={TranHisData} Renderwhat="transaction" />
                </div>
                <div className="col-12 col-lg-4  mt-2 mt-lg-0 px-0 px-md-2 newCustomers">
                    <TransactionPlusHistory HeaderName="new customers" TranHisData={NewCustmerData} Renderwhat="user" />
                </div>
                <div className="col-12 col-lg-4 p-0  mt-2 mt-md-0">
                    <RealTimeSales />
                </div>
            </div>
        </>
    );
};

export default MainHome;