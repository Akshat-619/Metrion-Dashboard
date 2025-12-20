import React from 'react'
import "./Dashboard.css"
import PayoutMethod from "../../../assets/payout-method.png"
import ActiveUserChart from './ActiveUserChart'
import EarningItem1Icon from "../../../assets/earning-item-1.png"
import EarningItem2Icon from "../../../assets/earning-item-2.png"
import EarningItem3Icon from "../../../assets/earning-item-3.png"
import EarningItemSuccessiveIcon from "../../../assets/earning-item-successive.png"
import ImpressionChart from "../../../assets/impression-chart.png"
import PageViewIcon from "../../../assets/page-view-icon.png"
import UsersIcon from "../../../assets/users-icon.png"
import ClicksIcon from "../../../assets/clicks-icon.png"  
import SalesIcon from "../../../assets/sales-icon.png"
import ItemsIcon from "../../../assets/items-icon.png"
import CardBottomLine from "../../../assets/card-bottom-line.png"
import ImpressionCharts from './ImpressionCharts'
import SalesCharts from './SalesCharts'

const Dashboard = () => {
  return (
    <div>
      <div className='row px-3'>
          <div className="col-9 ps-3 mt-5 main-container ">
            <div className="active-user ">

              {/* <!-- Title --> */}
              <div className="pt-5 active-user-title ">
                <h4>Active users right now</h4>
              </div>

              {/* <!-- Content Row --> */}
              <div className="row">

                {/* <!-- Left Info --> */}
                <div className="col-3">

                  {/* <!-- Page-View Count --> */}
                  <div className="page-view-count">
                    <p>300</p>
                  </div>

                  {/* <!-- Page-View Label --> */}
                  <div className="page-view-count-lable">
                    <p>
                      <img src={PageViewIcon} alt="" />
                      Page views per minute
                    </p>
                  </div>

                  {/* <!-- Payout Info --> */}
                  <div className="mt-3">
                    <img src={PayoutMethod} alt="" />
                  </div>

                </div>

                {/* <!-- Graph --> */}
                <div className="col-9">
                  <div className="active-user-graph d-flex justify-content-end">

                    <ActiveUserChart />
                  </div>
                </div>

              </div>

              {/* <!-- ================= STAT CARDS ================= --> */}
              <div className="row mt-5 cards g-3">

                {/* <!-- Card 1 --> */}
                <div className="col-md-3">
                  <div className="stat-card">
                    <p className="card-title">
                      <img src={UsersIcon} alt="" /> Users
                    </p>
                    <div className="card-content">
                      <p>35K</p>
                      <img src={CardBottomLine} alt="" />
                    </div>
                  </div>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="col-md-3">
                  <div className="stat-card">
                    <p className="card-title">
                      <img src={ClicksIcon} alt="" /> Clicks
                    </p>
                    <div className="card-content">
                      <p>1m</p>
                      <img src={CardBottomLine} alt="" />
                    </div>
                  </div>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="col-md-3">
                  <div className="stat-card">
                    <p className="card-title">
                      <img src={SalesIcon} alt="" /> Sales
                    </p>
                    <div className="card-content">
                      <p>345$</p>
                      <img src={CardBottomLine} alt="" />
                    </div>
                  </div>
                </div>

                {/* <!-- Card 4 --> */}
                <div className="col-md-3">
                  <div className="stat-card">
                    <p className="card-title">
                      <img src={ItemsIcon} alt="" /> Items
                    </p>
                    <div className="card-content">
                      <p>88</p>
                      <img src={CardBottomLine} alt="" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* <!-- ================= SALES BY AGE ================= --> */}
            <div className=" mt-5 sales-by-age">
              <h4>Sales by Age</h4>
              <SalesCharts />
            </div>

          </div>




          {/* <!-- ================= RIGHT COLUMN ================= --> */}

       
        <div className="col-3 pe-3 mt-5">
          <div className=" earning">
            <div className="earning-title">
              <h4>Your earning this month </h4>
            </div>


            <div className="earning-amount">
              <h4>735.2$</h4>
            </div>

            <div className="earning-mini-lable">
              <p>Update your payout method in Setting</p>
            </div>

            <div className="earning-withdraw">
              <div>
               
                <button>Withdraw All Earning <i
                  className="bi bi-credit-card-2-back-fill withdraw-icon"></i></button>
              </div>

            </div>

          </div>


          <div className="mt-5 earning-item">
            <div className="earning-item-title">
              Earnings by item

            </div>


            <div className="item-list">


              <div className="d-flex gap-2 align-items-center item-1">
                <div className="earning-item-icon">
                  <img src={EarningItem1Icon} alt="Item 1" />
                </div>

                <div className="earning-item-name">
                  <h5 className="m-0">Bento 3D Kit </h5>
                  <h6 className="m-0">Illustration</h6>
                </div>

                <div className="earning-item-arrow-icon">
                  <img src={EarningItemSuccessiveIcon} alt="" />
                </div>
              </div>


              <div className="d-flex gap-2 align-items-center item-2">
                <div className="earning-item-1-icon">
                  <img src={EarningItem2Icon} alt="" />
                </div>

                <div className="earning-item-name">
                  <h5 className="m-0">Bento 3D Kit </h5>
                  <h6 className="m-0">Coded Template</h6>
                </div>

                <div className="earning-item-arrow-icon">
                  <img src={EarningItemSuccessiveIcon} alt="" />
                </div>
              </div>


              <div className="d-flex gap-2 align-items-center item-3">
                <div className="earning-item-icon">
                  <img src={EarningItem3Icon} alt="" />
                </div>

                <div className="earning-item-name">
                  <h5 className="m-0">Bento 3D Kit </h5>
                  <h6 className="m-0">Illustration</h6>
                </div>

                <div className="earning-item-arrow-icon">
                  <img src={EarningItemSuccessiveIcon} alt="" />
                </div>
              </div>
            </div>
          </div>



          <div className="p-0 mt-5 ">
            <div className="impression" >
              <h4>Impression</h4>
              <ImpressionCharts />
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Dashboard
