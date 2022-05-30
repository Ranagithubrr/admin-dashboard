import React from 'react';
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { BsChevronDown } from 'react-icons/all';
import SalesRevenueData from '../../../../Data/SalesRevenue.json';
import './SalesRevenue.css';

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const SalesRevenue = () => {
  console.log('Im from salesrevenue');
  const salesDataSpliced = SalesRevenueData.splice(0, 5);
  return (
    <div>
      <div className="salesRevenue">
        <div className="salesRevenueTop">
          <h6>Sales Revenue</h6>
          <div className="salesRevenueTopRight">
            <div>
              <h6>Country</h6>
            </div>
            <div>
              <h6 className="usa">usa <BsChevronDown /></h6>
            </div>
          </div>
        </div>
        <div className="salesRevenueMid">
          <div>
            <ComposableMap>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
                }
              </Geographies>
            </ComposableMap>
          </div>
        </div>
        <div className="salesRevenueBottom pb-3">
          <table className="center">
            <thead>
              <tr>
                <th>Stated</th>
                <th>Orders</th>
                <th>Earnings</th>
              </tr>
            </thead>
            <tbody>
              {
                salesDataSpliced.map(function (data) {
                  return (
                    <tr>
                      <td>{data.state}</td>
                      <td>{data.orders}</td>
                      <td>{data.earning}</td>
                    </tr>
                  )

                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalesRevenue;