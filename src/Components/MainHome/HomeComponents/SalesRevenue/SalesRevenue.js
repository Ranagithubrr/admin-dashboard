import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import { BsChevronDown } from 'react-icons/all';
import SalesRevenueData from '../../../../Data/SalesRevenue.json';
import './SalesRevenue.css';

// const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const SalesRevenue = ({ setTooltipContent }) => {
  // console.log('Im from salesrevenue');
  const salesDataSpliced = SalesRevenueData.splice(0, 5);
  // console.log(salesDataSpliced);
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
              <ZoomableGroup>
                <Geographies geography="/features.json">
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          setTooltipContent(`${geo.properties.name}`);
                        }}
                        onMouseLeave={() => {
                          setTooltipContent("");
                        }}
                        style={{
                          default: {
                            fill: "#D6D6DA",
                            outline: "none"
                          },
                          hover: {
                            fill: "#F53",
                            outline: "none"
                          },
                          pressed: {
                            fill: "#E42",
                            outline: "none"
                          }
                        }}
                      />
                    ))
                  }
                </Geographies>
              </ZoomableGroup>
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
                    <tr key={data.id}>
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