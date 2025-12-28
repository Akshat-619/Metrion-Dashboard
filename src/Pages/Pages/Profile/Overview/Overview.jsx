import React from 'react'
import './Overview.css'
import  { useState } from 'react'


import card1 from '../../../../assets/card1.png'
import card2 from '../../../../assets/card2.png'
import card3 from '../../../../assets/card3.png'

import FollowersChart from './followersChart'
import InteractionChart from './InteractionChart'
import BestTimeChart from './BestTimeChart'   // ✅ MISSING IMPORT FIXED

import helpIcon from '../../../../assets/actionsCard_icon.png'
import help_Icon from '../../../../assets/helpIcon.png'
import GenderChart from './GenderChart'

const Overview = () => {
    const [chartType, setChartType] = useState("day");

  return (
    <div className="row pb-5">
      <div className="col-9  mt-1">
        <div className="row">

          {/* Card 1 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center">
              <div className="innerImg">
                <img src={card1} alt="Average Likes" className="img-fluid" />
              </div>
              <div className="innerText ms-3">
                <h5 className="d-flex align-items-center">
                  653 <span id="profit">+21.01%</span>
                </h5>
                <h3>Average Likes</h3>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center">
              <div className="innerImg">
                <img src={card2} alt="Comments" className="img-fluid" />
              </div>
              <div className="innerText ms-3">
                <h5 className="d-flex align-items-center">
                  123 <span id="profit">+4.399%</span>
                </h5>
                <h3>Comments received</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center">
              <div className="innerImg">
                <img src={card3} alt="Engagement Rate" className="img-fluid" />
              </div>
              <div className="innerText ms-3">
                <h5 className="d-flex align-items-center">
                  23% <span className="loss">-7.9%</span>
                </h5>
                <h3>Av. Engagement rate</h3>
              </div>
            </div>
          </div>
       

        {/* Followers & Actions */}
        <div className="row">
          <div className="col-8 mt-5">
            <div className="SubCard p-3">
              <div className="inner-followers">
              <div className="followersTitle d-flex justify-content-between align-items-center">
                <h2 className="SubCard_Heading">Followers</h2>
                <div className="followerChartindex">
                  <span className="Income">Income</span>
                  <span className="Outcome">Outcome</span>
                </div>
              </div>
              </div>

              <div className="followersChart">
                <FollowersChart />
              </div>
            </div>
          </div>
                                         {/* Actions Card */}
          <div className="col-4 mt-5">
            <div className="SubCard p-3">
              <div className="d-flex justify-content-between align-items-center actionsTitle">
                <h2 className="SubCard_Heading">Actions</h2>
                <img src={helpIcon} alt="Help" />
              </div>

              <div className="actionsList d-flex flex-column">
                <h5>Profile visits <span>250</span></h5>
                <h5>Website clicks <span>115</span></h5>
                <h5>Calls <span>67</span></h5>
                <h5>Get direction <span>164</span></h5>
                <h5>Emails <span>170</span></h5>
              </div>
            </div>
          </div>
        </div>

                                                    {/* Interaction */}
        <div className="row">
          <div className="col-6 mt-5">
            <div className="SubCard p-3">
              <div className="interactionTitle d-flex justify-content-between align-items-center">
                <h2 className="SubCard_Heading">Interaction</h2>
                <img src={help_Icon} alt="Help" />
              </div>

              <div className="interactionChart">
                <InteractionChart />
              </div>
            </div>
          </div>

                                                {/* Best Time Chart */}
          <div className="col-6 mt-5">
            <div className="SubCard p-3">
      <div className="BestTimeTitle d-flex align-items-center">
        <h2 className="SubCard_Heading mb-0">Best time</h2>

        <div className="d-flex ms-3 bestTimeTabs">
          <button
            className={`bestTimeBtn ${chartType === "day" ? "active" : ""}`}
            onClick={() => setChartType("day")}
          >
            Day
          </button>

          <button
            className={`bestTimeBtn ${chartType === "week" ? "active" : ""}`}
            onClick={() => setChartType("week")}
          >
            Week
          </button>
        </div>

        <img className="ms-auto" src={help_Icon} alt="Help" />
      </div>

      <div className="besttimeChart mt-2" >
        <BestTimeChart type={chartType} />
      </div>
    </div>
          </div>


                                          {/* Gender Chart */}

                                





</div>
        </div>

      </div> 
<div className="col-3 mt-1">
  <div className="right-container">
    <div className="rc-title">
      <h4>Profile</h4>
      <div className="rc-title-icons">
        <i class="bi bi-people-fill"></i>
        <i class="bi bi-gear-fill"></i>
      </div>
    </div>

  </div>
</div>
 


   
    </div>
  )
}

export default Overview
