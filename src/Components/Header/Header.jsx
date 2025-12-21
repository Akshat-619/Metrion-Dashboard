import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const location = useLocation();

  const pageTitles = {
    "/dashboard": "DASHBOARD",
    "/analytics": "ANALYTICS",
    "/profile/overview": "PROFILE OVERVIEW",
    "/profile/teams": "TEAMS",
    "/profile/all-projects": "ALL PROJECTS",
    "/user/reports": "REPORTS",
    "/user/new-user": "NEW USER",
    "/accounts/setting": "SETTING",
    "/accounts/billing": "BILLING",
    "/accounts/invoice": "INVOICE",
    "/accounts/security": "SECURITY",
    "/projects/pricing": "PRICING",
    "/projects/charts": "CHARTS",
    "/projects/notification": "NOTIFICATION",
    "/projects/chat": "CHAT",
    "/applications/kanban": "KANBAN",
    "/applications/wizard": "WIZARD",
    "/applications/data-tables": "DATA TABLES",
    "/applications/calendar": "CALENDAR",
    "/ecommerce/products/new": "NEW PRODUCTS",
    "/ecommerce/products/edit": "EDIT PRODUCTS",
    "/ecommerce/products/list": "PRODUCT LIST",
    "/ecommerce/orders/list": "ORDER LIST",
    "/ecommerce/orders/details": "ORDER DETAILS",
  };

  const title = pageTitles[location.pathname] || "DASHBOARD";
  /* =========================================================
     BOOTSTRAP TOOLTIPS
  ========================================================= */
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );

    tooltipTriggerList.forEach((el) => {
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
      void bell.offsetWidth; // force reflow
      bell.classList.add("ring");
    };

    ringBell();
    const interval = setInterval(ringBell, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="header px-3 d-flex w-100">
        <div className="d-flex w-100 align-items-center title">

          {/* PAGE TITLE */}
          <h2>
            <b>{title}</b>
          </h2>

          {/* SEARCH */}
          <div className="search-bar">
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.295.293.295.767.002 1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
              <input
                id="query"
                className="input"
                type="search"
                placeholder="Search..."
                name="searchbar"
              />
            </div>
          </div>

          {/* NAV ICONS */}
          <div className="d-flex nav-icon">
            <div className="nav-profile">
              <i
                className="bi bi-person-circle profile-icon"
                id="dropdownProfile"
                data-bs-toggle="dropdown"
              ></i>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </div>

            <div className="notification">
              <i
                className="bi bi-bell-fill notification-icon"
                id="dropdownNotification"
                data-bs-toggle="dropdown"
              ></i>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">No new notification</a></li>
              </ul>
            </div>

            <div className="nav-message">
              <i
                className="bi bi-send-fill message-icon"
                data-bs-toggle="tooltip"
                title="Coming Soon"
              ></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
