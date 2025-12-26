import React from 'react'
import "./Analytics.css"
import profitIcon from "../../../assets/profitIcon.png";
import lossIcon from "../../../assets/lossIcon.png";
import salesFunnelIcon from "../../../assets/salesFunneliconDown.png";
import SalesFunnelChart from './salesFunnelChart.jsx';
import WatchListChart from './WatchListChart.jsx';
{/* Device Category */}
import Mobile from "../../../assets/analyticsDeviceCategory_Mobile.png";
import Tablet from "../../../assets/analyticsDeviceCategory_Tablet.png";
import Desktop from "../../../assets/analyticsDeviceCategory_Desktop.png";
import TV from "../../../assets/analyticsDeviceCategory_TV.png";

{/* Top Countaries */}
import UnitedStates from "../../../assets/US.png";
import Germany from "../../../assets/Germany.png";
import Spain from "../../../assets/Spain.png";
import Pakistan from "../../../assets/Pakistan.png";

const Analytics = () => {
  return (
    <div className="col-12 px-4 pb-5">
      <div className="counts d-flex justify-content-between mx-auto mt-5 ">



        {/* Card 1 */}

        <div className="card-item card-1">
          <h6>
            Available to withdraw
            <sup id="neutral-sup">
              <img src={profitIcon} alt="" /> 10.0%
            </sup>
          </h6>
          <div className="d-flex mt-3 withdrawal-amt">
            <h1>$1,567.99</h1>
            <p>Wed, Jul 20</p>
          </div>
        </div>
        <div className="empty-border"></div>


        {/* Card 2 */}

        <div className="card-item card-2">
          <h6>
            Today Revenue
            <sup id="loss-sup">
              <img src={lossIcon} alt="" /> 3.0%
            </sup>
          </h6>
          <div className="d-flex mt-3 withdrawal-amt">
            <h1>$2,868.99</h1>
            <p>143 Orders</p>
          </div>
        </div>
        <div className="empty-border"></div>

        {/* Card 3 */}

        <div className="card-item card-3">
          <h6>
            Today Sessions
            <sup id="profit-sup">
              <img src={profitIcon} alt="" /> 3.2%
            </sup>
          </h6>
          <div className="d-flex mt-3 withdrawal-amt">
            <h1>156k</h1>
            <p>32k Visitors</p>
          </div>
        </div>
        <div className="empty-border"></div>

        {/* Card 4 */}

        <div className="card-item card-4">
          <h6>
            Subscribers
            <sup id="profit-sup">
              <img src={profitIcon} alt="" /> 8.3%
            </sup>
          </h6>
          <div className="d-flex mt-3 withdrawal-amt">
            <h1>3,422</h1>
            <p>$32.48 Average Order</p>
          </div>
        </div>
      </div>



      {/* ------------------------------------------Mid Section------------------------------------------ */}
      <div className="row">
        <div className="col-lg-9 col-md-9 col-12">

          {/* Sales Funnel Section */}
          <div className="salesFunnel p-4 mt-5">
            <div className="d-flex salesFunnelTitle mt-2 m-0">
              <h4 className='ml-2'>Sales Funnel</h4>
              <p>This Month <img src={salesFunnelIcon} /></p>
            </div>
            <div className="salesFunnelChart mt-2">
              <SalesFunnelChart />
            </div>
          </div>

          {/* WatchList Section */}

          <div className="watchlist p-4 mt-5">
            <div className="d-flex watchListTitle ">
              <h4 className='ml-2'>Watch List</h4>
              <div className="tabs">
                <button type="button" data-chart="day" className="active">
                  <p>Day</p>
                </button>
                <button type="button" data-chart="week">
                  <p>Week</p>
                </button>
                <button type="button" data-chart="month">
                  <p>Month</p>
                </button>
              </div>
            </div>


            <div className='watchlistChart'>
              <WatchListChart />
            </div>
          </div>
        </div>




      {/* -----------------------------------------Right Sidebar----------------------------------------- */}
      <div className="col-3 mt-5 ml-5">

        {/* Device Category Section */}
      <div className="deviceCategory">
        <h4>Device Category</h4>
        <div className="dcList mt-5">
          <p className='mt-4'><img src={Mobile}/>Mobile <span className='dcList-percentage ms-auto'>96.42%</span></p>
          <p className='mt-4'><img src={Tablet}/>Tablet <span className='dcList-percentage ms-auto'>2.76%</span></p>
          <p className='mt-4'><img src={Desktop}/>Laptop <span className='dcList-percentage ms-auto'>0.82%</span></p>
          <p className='mt-4'><img src={TV}/>TV <span className='dcList-percentage ms-auto'>12.3%</span></p>
        </div>
      </div>

      {/* Top Countaries */}

      <div className="top-countries mt-5">
        <h4>Top Countries</h4>
        <div className="topCountriesList mt-5">
          <p className='mt-4 '><img src={UnitedStates} />United States<span className='dcList-percentage ms-auto'>23.4%</span></p>
          <p className='mt-4 '><img src={Germany} />Germany <span className='dcList-percentage ms-auto'>18.7%</span></p>
          <p className='mt-4 '><img src={Spain} />Spain <span className='dcList-percentage ms-auto'>12.3%</span></p>
          <p className='mt-4'><img src={Pakistan} />Pakistan <span className='dcList-percentage ms-auto'>9.8%</span></p>
        </div>
      </div>












      </div>

























</div>
    </div>
  )
}

export default Analytics;
