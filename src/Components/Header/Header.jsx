import React, { useEffect } from 'react'
import "./Header.css"
import Sidebar from '../Sidebar/Sidebar';
const Header = () => {
       /* =========================================================
         BOOTSTRAP TOOLTIPS
      ========================================================= */
      useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll(
          '[data-bs-toggle="tooltip"]'
        );
    
        tooltipTriggerList.forEach(el => {
          new window.bootstrap.Tooltip(el);
        });
      }, []);
    
      /* =========================================================
         NOTIFICATION BELL ANIMATION
      ========================================================= */
      useEffect(() => {
        const bell = document.getElementById("dropdownNotification");
        if (!bell) return;
    
        const ringBell = () => {
          bell.classList.remove("ring");
          void bell.offsetWidth; // reflow
          bell.classList.add("ring");
        };
    
        ringBell();
        const interval = setInterval(ringBell, 3000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <div>
      

                        <div className="header px-3 d-flex  w-100">
                            <div className="d-flex w-100 align-items-center title">


                                <h2> <b>DASHBOARD</b></h2>



                                <div className="search-bar">
                                    <div className="group">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                                            <g>
                                                <path
                                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
                                                </path>
                                            </g>
                                        </svg>

                                        <input id="query" className="input" type="search" placeholder="Search..."
                                            name="searchbar" />
                                    </div>
                                </div>


                                <div className="d-flex nav-icon">

                                    <div className="nav-profile">
                                        <i className="bi bi-person-circle profile-icon" id="dropdownProfile"
                                            data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownProfile">
                                            <li><a className="d-flex dropdown-item" href="#"><i
                                                className="bi bi-person-fill"></i>Profile</a></li>
                                            <li><a className="d-flex pl dropdown-item" href="#"><i
                                                className="bi bi-gear-fill"></i>Settings</a></li>
                                            <li><a className="d-flex dropdown-item" href="#"><span><i
                                                className=" bi bi-box-arrow-right"></i></span>Logout</a></li>
                                        </ul>
                                    </div>

                                    <div className="notification">
                                        <i className="bi bi-bell-fill notification-icon" id="dropdownNotification"
                                            data-bs-toggle="dropdown" aria-expanded="false"></i>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownNotification">
                                            <li><a className="d-flex dropdown-item" href="#">No new notification</a></li>
                                        </ul>
                                    </div>

                                    <div className="nav-message">
                                        <i className="bi bi-send-fill message-icon" data-bs-toggle="tooltip"
                                            data-bs-placement="bottom" title="Coming Soon"></i>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="px-3">

                            <div className="row">

                                <div className="col-9">

                                </div>




                                <div className="col-3">

                                </div>
                            </div>
                        </div>
                    </div>
              
                
  )
}

export default Header
