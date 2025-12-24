import React from 'react'
import "./Analytics.css"
import profitIcon from "../../../assets/profitIcon.png";
import lossIcon from "../../../assets/lossIcon.png";
import salesFunnelIcon from "../../../assets/salesFunneliconDown.png";
import SalesFunnelChart from './salesFunnelChart.jsx';


const Analytics = () => {
  return (
    <div className="col-12 px-4">
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




<div className="row">
  <div className="col-lg-9 col-md-9 col-12">

{/* Sales Funnel Section */}
    <div className="salesFunnel mt-5">
    <div className="d-flex salesFunnelTitle m-0">
      <h4>Sales Funnel</h4>
      <p>This Month <img src={salesFunnelIcon}/></p>
    </div>
    <div className="salesFunnelChart mt-2">
    <SalesFunnelChart />
    </div>
    </div>













  </div>
</div>
</div>
  )
}

export default Analytics;
