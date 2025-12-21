import React from 'react'
import "./Analytics.css"
import profitIcon from "../../../assets/profitIcon.png";
import lossIcon from "../../../assets/lossIcon.png"
import cardDivider from "../../../assets/cardDivider.png"

const Analytics = () => {
  return (
    <div className='col-12'>
      <div className=" d-flex mt-5 counts">
        <div className='cards m-0 d-flex'>
          {/* Card-1 */}
          <div className="card-1 ">
            <div>
              <h6>Available to withdraw<sup id='neutral-sup'><img  src={profitIcon} alt="" />10.0%</sup></h6>
            </div>
            <div className="d-flex mt-3 withdrawal-amt">
              <h1>$1,567.99</h1>
              <p>Wed, Jul 20</p>
            </div>
          </div>
   <img className='cardDivider' src={cardDivider} />

{/* Card-2 */}
<div className="card-2">
            <div>
              <h6>Today Revenue<sup id='loss-sup'><img src={lossIcon} alt="" />3.0%</sup></h6>
            </div>
            <div className="d-flex mt-3 withdrawal-amt">
              <h1>$2,868.99</h1>
              <p>143 Orders</p>
            </div>
          </div>
<img className='cardDivider' src={cardDivider} />

{/* Card-3 */}
<div className="card-3">
   <div>
              <h6>Today Sessions<sup id='profit-sup'><img src={profitIcon} alt="" />3.2%</sup></h6>
            </div>
            <div className="d-flex mt-3 withdrawal-amt">
              <h1>156k</h1>
              <p>32k Visitors</p>
            </div>
          </div>
</div>
<img className='cardDivider' src={cardDivider} />

{/* Card-4 */}

<div className="card-4">
  <div>
              <h6>Subscribers<sup id='profit-sup'><img src={profitIcon} alt="" />8.3%</sup></h6>
            </div>
            <div className="d-flex mt-3 withdrawal-amt">
              <h1>3,422</h1>
              <p>$32.48 Average Order</p>
            </div>
            <img className='cardDivider' src={cardDivider} />
</div>







        </div>
      </div>
    

  )
}

export default Analytics
