import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

import Logo from "../../assets/Logo.png";
import closeIcon from "../../assets/sidebar-close-icon.png";

const Sidebar = () => {
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(null);

  // auto-open based on route
  useEffect(() => {
    if (
      location.pathname.startsWith("/dashboard") ||
      location.pathname.startsWith("/analytics")
    ) setOpenMenu("home");
    else if (location.pathname.startsWith("/profile")) setOpenMenu("profile");
    else if (location.pathname.startsWith("/user")) setOpenMenu("user");
    else if (location.pathname.startsWith("/accounts")) setOpenMenu("accounts");
    else if (location.pathname.startsWith("/projects")) setOpenMenu("projects");
    else if (location.pathname.startsWith("/applications")) setOpenMenu("applications");
    else if (location.pathname.startsWith("/ecommerce")) setOpenMenu("ecommerce");
  }, [location.pathname]);

  const toggleMenu = (menu) => {
    setOpenMenu(prev => (prev === menu ? null : menu));
  };
  return (
    <div className="left-container min-vh-100 d-flex flex-column">

      {/* LOGO */}
      <div className="d-flex w-100 justify-content-center">
        <img className="mt-5 mb-4" src={Logo} alt="Logo" />
      </div>

      <ul className="sidebar-menu m-0 p-0 w-100 pe-2 ps-0 list-unstyled">

        {/* ================= HOME ================= */}
        <li className={openMenu === "home" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("home"); }}>
            Home
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li>
              <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}>
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/analytics" className={({isActive}) => isActive ? "active-link" : ""}>
                Analytics
              </NavLink>
            </li>
          </ul>
        </li>

        {/* ================= PROFILE ================= */}
        <li className={openMenu === "profile" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("profile"); }}>
            Profile
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li><NavLink to="/profile/overview" className={({isActive}) => isActive ? "active-link" : ""}>Profile Overview</NavLink></li>
            <li><NavLink to="/profile/teams" className={({isActive}) => isActive ? "active-link" : ""}>Teams</NavLink></li>
            <li><NavLink to="/profile/all-projects" className={({isActive}) => isActive ? "active-link" : ""}>All Projects</NavLink></li>
          </ul>
        </li>

        {/* ================= USER ================= */}
        <li className={openMenu === "user" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("user"); }}>
            User
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li><NavLink to="/user/reports" className={({isActive}) => isActive ? "active-link" : ""}>Reports</NavLink></li>
            <li><NavLink to="/user/new-user" className={({isActive}) => isActive ? "active-link" : ""}>New User</NavLink></li>
          </ul>
        </li>
        {/* ================= ACCOUNTS ================= */}
        <li className={openMenu === "accounts" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("accounts"); }}>
            Accounts
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li><NavLink to="/accounts/setting" className={({isActive}) => isActive ? "active-link" : ""}>Setting</NavLink></li>
            <li><NavLink to="/accounts/billing" className={({isActive}) => isActive ? "active-link" : ""}>Billing</NavLink></li>
            <li><NavLink to="/accounts/invoice" className={({isActive}) => isActive ? "active-link" : ""}>Invoice</NavLink></li>
            <li><NavLink to="/accounts/security" className={({isActive}) => isActive ? "active-link" : ""}>Security</NavLink></li>
          </ul>
        </li>

        {/* ================= APPLICATIONS ================= */}
        <li className={openMenu === "applications" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("applications"); }}>
            Applications
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li><NavLink to="/applications/kanban" className={({isActive}) => isActive ? "active-link" : ""}>Kanban</NavLink></li>
            <li><NavLink to="/applications/wizard" className={({isActive}) => isActive ? "active-link" : ""}>Wizard</NavLink></li>
            <li><NavLink to="/applications/data-tables" className={({isActive}) => isActive ? "active-link" : ""}>Data Tables</NavLink></li>
            <li><NavLink to="/applications/calendar" className={({isActive}) => isActive ? "active-link" : ""}>Calendar</NavLink></li>
          </ul>
        </li>

        {/* ================= E-COMMERCE ================= */}
        <li className={openMenu === "ecommerce" ? "open" : ""}>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleMenu("ecommerce"); }}>
            E-Commerce
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li><NavLink to="/ecommerce/products/new" className={({isActive}) => isActive ? "active-link" : ""}>New Products</NavLink></li>
            <li><NavLink to="/ecommerce/products/edit" className={({isActive}) => isActive ? "active-link" : ""}>Edit Products</NavLink></li>
            <li><NavLink to="/ecommerce/products/list" className={({isActive}) => isActive ? "active-link" : ""}>Product List</NavLink></li>
            <li><NavLink to="/ecommerce/orders/list" className={({isActive}) => isActive ? "active-link" : ""}>Order List</NavLink></li>
            <li><NavLink to="/ecommerce/orders/details" className={({isActive}) => isActive ? "active-link" : ""}>Order Details</NavLink></li>
          </ul>
        </li>

      </ul>

      <div className="mt-auto text-center pb-3 sb-user-card">
        <img src="sidebar-user-card.png" alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
