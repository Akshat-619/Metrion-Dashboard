import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

import Logo from "../../assets/Logo.png";
import closeIcon from "../../assets/sidebar-close-icon.png";
const Sidebar = () => {
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar-menu li > a");

    const handleClick = (e) => {
      const anchor = e.currentTarget;
      const li = anchor.parentElement;
      const submenu = li.querySelector(":scope > .child-menu");

      // Only block default for dropdown headers (href="#")
      if (submenu && anchor.getAttribute("href") === "#") {
        e.preventDefault();

        // Close siblings at same level
        Array.from(li.parentElement.children).forEach((sibling) => {
          if (sibling !== li) sibling.classList.remove("open");
        });

        li.classList.toggle("open");
      }
      // If it's a <Link>, DO NOT preventDefault
    };

    links.forEach((link) =>
      link.addEventListener("click", handleClick)
    );

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleClick)
      );
    };
  }, []);
  return (
    <div className="left-container min-vh-100 d-flex flex-column">

      {/* LOGO */}
      <div className="d-flex w-100 justify-content-center">
        <img className="mt-5 mb-4" src={Logo} alt="Logo" />
      </div>

      {/* SIDEBAR MENU */}
      <ul className="sidebar-menu m-0 p-0 w-100 pe-2 ps-0 list-unstyled">

        {/* HOME */}
        <li>
          <a href="#">
            Home
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>
          <ul className="list-unstyled child-menu">
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
          </ul>
        </li>

        {/* PAGES */}
        <li>
          <a href="#">
            Pages
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">

            {/* Profile */}
            <li>
              <a href="#">Profile <img className="sidebar-close-icon" src={closeIcon} alt="" /></a>
              <ul className="list-unstyled child-menu">
                <li><Link to="/profile/overview">Profile Overview</Link></li>
                <li><Link to="/profile/teams">Teams</Link></li>
                <li><Link to="/profile/all-projects">All Projects</Link></li>
              </ul>
            </li>

            {/* User */}
            <li>
              <a href="#">User <img className="sidebar-close-icon" src={closeIcon} alt="" /></a>
              <ul className="list-unstyled child-menu">
                <li><Link to="/user/reports">Reports</Link></li>
                <li><Link to="/user/new-user">New User</Link></li>
              </ul>
            </li>

            {/* Accounts */}
            <li>
              <a href="#">Accounts <img className="sidebar-close-icon" src={closeIcon} alt="" /></a>
              <ul className="list-unstyled child-menu">
                <li><Link to="/accounts/setting">Setting</Link></li>
                <li><Link to="/accounts/billing">Billing</Link></li>
                <li><Link to="/accounts/invoice">Invoice</Link></li>
                <li><Link to="/accounts/security">Security</Link></li>
              </ul>
            </li>

            {/* Projects */}
            <li>
              <a href="#">Projects <img className="sidebar-close-icon" src={closeIcon} alt="" /></a>
              <ul className="list-unstyled child-menu">
                <li><Link to="/projects/pricing">Pricing</Link></li>
                <li><Link to="/projects/charts">Charts</Link></li>
                <li><Link to="/projects/notification">Notification</Link></li>
                <li><Link to="/projects/chat">Chat</Link></li>
              </ul>
            </li>

          </ul>
        </li>

        {/* APPLICATIONS */}
        <li>
          <a href="#">
            Applications
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>
          <ul className="list-unstyled child-menu">
            <li><Link to="/applications/kanban">Kanban</Link></li>
            <li><Link to="/applications/wizard">Wizard</Link></li>
            <li><Link to="/applications/data-tables">Data Tables</Link></li>
            <li><Link to="/applications/calendar">Calendar</Link></li>
          </ul>
        </li>

        {/* E-COMMERCE */}
        <li>
          <a href="#">
            E-Commerce
            <img className="sidebar-close-icon" src={closeIcon} alt="" />
          </a>

          <ul className="list-unstyled child-menu">
            <li>
              <a href="#">Products</a>
              <ul className="list-unstyled">
                <li><Link to="/ecommerce/products/new">New Products</Link></li>
                <li><Link to="/ecommerce/products/edit">Edit Products</Link></li>
                <li><Link to="/ecommerce/products/list">Product List</Link></li>
              </ul>
            </li>

            <li>
              <a href="#">Orders</a>
              <ul className="list-unstyled child-menu">
                <li><Link to="/ecommerce/orders/list">Order List</Link></li>
                <li><Link to="/ecommerce/orders/details">Order Details</Link></li>
              </ul>
            </li>
          </ul>
        </li>

      </ul>

      {/* USER CARD */}
      <div className="mt-auto text-center pb-3 sb-user-card">
        <img src="sidebar-user-card.png" alt="" />
      </div>

    </div>
  );
};

export default Sidebar;
