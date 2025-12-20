import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Logo from "../../assets/Logo.png"
import closeIcon from "../../assets/sidebar-close-icon.png"

const Sidebar = () => {
  

  /* =========================================================
     SIDEBAR DROPDOWN + ACTIVE MENU
  ========================================================= */
  useEffect(() => {
    const links = document.querySelectorAll(".sidebar-menu li > a");

    const handleClick = (e) => {
      const li = e.currentTarget.parentElement;
      const submenu = li.querySelector(":scope > .child-menu");

      if (submenu) {
        e.preventDefault();

        // close siblings
        Array.from(li.parentElement.children).forEach(sibling => {
          if (sibling !== li) sibling.classList.remove("open");
        });

        li.classList.toggle("open");
      }
    };

    links.forEach(link => link.addEventListener("click", handleClick));

    /* ================= ACTIVE MAIN MENU ================= */
    const currentPage = window.location.pathname.split("/").pop();

    document
      .querySelectorAll(".sidebar-menu > li")
      .forEach(li => li.classList.remove("active", "open"));

    if (currentPage === "Dashboard.html") {
      const homeLi = document.querySelector(".sidebar-menu > li:first-child");
      if (homeLi) homeLi.classList.add("active", "open");
    }

    return () => {
      links.forEach(link =>
        link.removeEventListener("click", handleClick)
      );
    };
  }, []);

    return (
        <>
          
                        <div className=" left-containerls
 min-vh-100 d-flex flex-column">

                            <div className="d-flex w-100 justify-content-center">
                                <img className="mt-5 mb-4" src={Logo} alt="Logo" />
                            </div>


                            <ul className="sidebar-menu m-0 p-0 w-100 pe-2 ps-0 list-unstyled">

  {/* ================= HOME ================= */}
  <li>
    <a href="#">
      <img src="home-icon.png" alt="" />
      Home
      <img className="sidebar-close-icon" src={closeIcon} alt="" />
    </a>

    <ul className="list-unstyled child-menu">
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/analytics">Analytics</Link></li>
    </ul>
  </li>

  {/* ================= PAGES ================= */}
  <li>
    <a href="#">
      <img src="page-icon.png" alt="" />
      Pages
      <img className="sidebar-close-icon" src={closeIcon} alt="" />
    </a>

    <ul className="list-unstyled child-menu">

      {/* Profile */}
      <li>
        <a href="#">
          Profile
          <img className="sidebar-close-icon" src={closeIcon} alt="" />
        </a>
        <ul className="list-unstyled child-menu">
          <li><Link to="/profile/overview">Profile Overview</Link></li>
          <li><Link to="/profile/teams">Teams</Link></li>
          <li><Link to="/profile/all-projects">All Projects</Link></li>
        </ul>
      </li>

      {/* User */}
      <li>
        <a href="#">
          User
          <img className="sidebar-close-icon" src={closeIcon} alt="" />
        </a>
        <ul className="list-unstyled child-menu">
          <li><Link to="/user/reports">Reports</Link></li>
          <li><Link to="/user/new-user">New User</Link></li>
        </ul>
      </li>

      {/* Accounts */}
      <li>
        <a href="#">
          Accounts
          <img className="sidebar-close-icon" src={closeIcon} alt="" />
        </a>
        <ul className="list-unstyled child-menu">
          <li><Link to="/accounts/setting">Setting</Link></li>
          <li><Link to="/accounts/billing">Billing</Link></li>
          <li><Link to="/accounts/invoice">Invoice</Link></li>
          <li><Link to="/accounts/security">Security</Link></li>
        </ul>
      </li>

      {/* Projects */}
      <li>
        <a href="#">
          Projects
          <img className="sidebar-close-icon" src={closeIcon} alt="" />
        </a>
        <ul className="list-unstyled child-menu">
          <li><Link to="/projects/pricing">Pricing</Link></li>
          <li><Link to="/projects/charts">Charts</Link></li>
          <li><Link to="/projects/notification">Notification</Link></li>
          <li><Link to="/projects/chat">Chat</Link></li>
        </ul>
      </li>

    </ul>
  </li>

  {/* ================= APPLICATIONS ================= */}
  <li>
    <a href="#">
      <img src="applications-icon.png" alt="" />
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

  {/* ================= E-COMMERCE ================= */}
  <li>
    <a href="#">
      <img src="e-commerce-icon.png" alt="" />
      E-Commerce
      <img className="sidebar-close-icon" src={closeIcon} alt="" />
    </a>

    <ul className="list-unstyled child-menu">
      <li><Link to="/ecommerce/overview">Overview</Link></li>

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

  {/* ================= AUTH ================= */}
  <li>
    <a href="#">
      <img src="auth-icon.png" alt="" />
      Authentication
      <img className="sidebar-close-icon" src={closeIcon} alt="" />
    </a>
  </li>

</ul>



                            <div className="mt-auto text-center pb-3 sb-user-card">
                                <img src="sidebar-user-card.png" alt="" />
                            </div>
                        </div>
                 

                  
</>

            )
}
        

export default Sidebar
