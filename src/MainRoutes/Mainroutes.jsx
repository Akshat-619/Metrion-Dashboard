import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from '../Layout/Layout';

// ================= HOME =================
import Dashboard from "../Pages/Home/Dashboard/Dashboard"
import Analytics from "../Pages/Home/Analytics/Analytics";

// ================= PAGES =================
import Overview from "../Pages/Pages/Profile/Overview/Overview";
import Teams from "../Pages/Pages/Profile/Teams/Teams";
import AllProjects from "../Pages/Pages/Profile/AllProjects/AllProjects";

import Reports from "../Pages/Pages/User/Reports/Reports";
import NewUser from "../Pages/Pages/User/NewUser/NewUser";

import Setting from "../Pages/Pages/Accounts/Setting/Setting";
import Billing from "../Pages/Pages/Accounts/Billing/Billing";
import Invoice from "../Pages/Pages/Accounts/Invoice/Invoice";
import Security from "../Pages/Pages/Accounts/Security/Security";

import Pricing from "../Pages/Pages/Projects/Pricing/Pricing";
import Charts from "../Pages/Pages/Projects/Charts/Charts";
import Notification from "../Pages/Pages/Projects/Notification/Notification";
import Chat from "../Pages/Pages/Projects/Chat/Chat";

// ================= APPLICATIONS =================
import Kanban from "../Pages/Applications/Kanban/Kanban";
import Wizard from "../Pages/Applications/Wizard/Wizard";
import DataTables from "../Pages/Applications/DataTables/DataTables";
import Calendar from "../Pages/Applications/Calendar/Calendar";

// ================= E-COMMERCE =================
import NewProducts from "../Pages/Ecommerce/Products/NewProducts/NewProducts";
import EditProducts from "../Pages/Ecommerce/Products/EditProducts/EditProducts";
import ProductList from "../Pages/Ecommerce/Products/ProductList/ProductList";
import OrderList from "../Pages/Ecommerce/Orders/OrderList/OrderList";
import OrderDetails from "../Pages/Ecommerce/Orders/OrderDetails/OrderDetails";

// ================= AUTH =================
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";

const Mainroutes = () => {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route element={<Layout />}>
        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* HOME */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />

        {/* PROFILE */}
        <Route path="/profile/overview" element={<Overview />} />
        <Route path="/profile/teams" element={<Teams />} />
        <Route path="/profile/all-projects" element={<AllProjects />} />

        {/* USER */}
        <Route path="/user/reports" element={<Reports />} />
        <Route path="/user/new-user" element={<NewUser />} />

        {/* ACCOUNTS */}
        <Route path="/accounts/setting" element={<Setting />} />
        <Route path="/accounts/billing" element={<Billing />} />
        <Route path="/accounts/invoice" element={<Invoice />} />
        <Route path="/accounts/security" element={<Security />} />

        {/* PROJECTS */}
        <Route path="/projects/pricing" element={<Pricing />} />
        <Route path="/projects/charts" element={<Charts />} />
        <Route path="/projects/notification" element={<Notification />} />
        <Route path="/projects/chat" element={<Chat />} />

        {/* APPLICATIONS */}
        <Route path="/applications/kanban" element={<Kanban />} />
        <Route path="/applications/wizard" element={<Wizard />} />
        <Route path="/applications/data-tables" element={<DataTables />} />
        <Route path="/applications/calendar" element={<Calendar />} />

        {/* E-COMMERCE */}
        <Route path="/ecommerce/products/new" element={<NewProducts />} />
        <Route path="/ecommerce/products/edit" element={<EditProducts />} />
        <Route path="/ecommerce/products/list" element={<ProductList />} />
        <Route path="/ecommerce/orders/list" element={<OrderList />} />
        <Route path="/ecommerce/orders/details" element={<OrderDetails />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Mainroutes;
