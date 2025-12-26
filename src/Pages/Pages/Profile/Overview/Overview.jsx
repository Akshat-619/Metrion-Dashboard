import React from 'react'
import './Overview.css'
import card1 from '../../../../assets/card1.png'
import card2 from '../../../../assets/card2.png'
import card3 from '../../../../assets/card3.png'
import FollowersChart from './followersChart'
import helpIcon from '../../../../assets/actionsCard_icon.png'
import help_Icon from '../../../../assets/helpIcon.png'
import InteractionChart from './InteractionChart'
const Overview = () => {
  return (
    <div className="row">
      <div className="col-9 ms-3 mt-1">
        <div className="row">

          {/* Card 1 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center ">
              <div className="innerImg">
                <img src={card1} alt="Card 1" className="img-fluid" />
              </div>
              <div className="innerText">
                <h5 className='d-flex ms-3 align-items-center '>653 <span id='profit'>+21.01%</span></h5>
                <h3 className='ms-3'>Average Likes</h3>
              </div>
            </div>
          </div>


          {/* Card 2 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center ">
              <div className="innerImg">
                <img src={card2} alt="Card 2" className="img-fluid" />
              </div>
              <div className="innerText">
                <h5 className='d-flex ms-3 align-items-center '>123 <span id='profit'>+4.399%</span></h5>
                <h3 className='ms-3'>Comments recived</h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-4">
            <div className="cards d-flex p-3 align-items-center ">
              <div className="innerImg">
                <img src={card3} alt="Card 3" className="img-fluid" />
              </div>
              <div className="innerText">
                <h5 className='d-flex ms-3 align-items-center '>23% <span className='loss'>-7.9%</span></h5>
                <h3 className='ms-3'>Av. Engagement rate</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-8 ">
            {/* Followers */}
            <div className="SubCard mt-5 p-3">
              <div className="inner-followers">
                <div className="followersTitle d-flex justify-content-between align-items-center">
                  <h2 className='SubCard_Heading'>Followers</h2>
                  <div className='followerChartindex'>
                    <span className='Income'>Income</span>
                    <span className='Outcome'>Outcome</span>
                  </div>
                </div>
                <div className="followersChart">
                  <FollowersChart />
                </div>
              </div>
            </div>
          </div>


          <div className="col-4 mt-5">

            <div className="SubCard p-3">
              <div className="d-flex justify-content-space-between align-item-center actionsTitle">
                <h2 className='SubCard_Heading'>Actions</h2>
                <img className='m-auto me-0' src={helpIcon} />
              </div>
              <div className="actionsList d-flex flex-column justify-content-space-between align-item-center">
                <h5>Profile visits <span className=''>250</span></h5>
                <h5>Website clicks <span>115</span></h5>
                <h5>Calls <span>67</span></h5>
                <h5>Getvdirection <span>164</span></h5>
                <h5>Emails <span>170</span></h5>
              </div>

            </div>
          </div>
        </div>

            <div className="row">

              {/* Interaction */}
              <div className="col-6 mt-5">
            <div className="SubCard p-3">
              <div className="interactionTitle d-flex justify-content-space-between align-content-center">
                <h2 className='SubCard_Heading'>Interaction</h2> 
                <div className="helpIcon ms-auto">
                <img src={help_Icon} alt="" />
                </div>
              </div>
              <div className="interactionChart">
                <InteractionChart/>
              </div>
            </div>

              </div>

            <div className="col-6 mt-5">
                <div className="SubCard p-3">
              <div className="BestTimeTitle d-flex justify-content-space-between align-content-center">
                <h2 className='SubCard_Heading'>Best time</h2> 
                <div className="helpIcon ms-auto">
                <img src={help_Icon} alt="" />
                </div>
              </div>
              <div className="interactionChart">
                <InteractionChart/>
              </div>
            </div>
            </div>


            </div>










      </div>

    </div>

  )
}

export default Overview
