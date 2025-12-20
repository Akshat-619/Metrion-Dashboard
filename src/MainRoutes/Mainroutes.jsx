import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Mainroutes = () => {
  return (
   <Routes>
  {/* ================= HOME ================= */}
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/analytics" element={<Analytics />} />

  {/* ================= PAGES → PROFILE ================= */}
  <Route path="/profile/overview" element={<Overview />} />
  <Route path="/profile/teams" element={<Teams />} />
  <Route path="/profile/all-projects" element={<AllProjects />} />

  {/* ================= PAGES → USER ================= */}
  <Route path="/user/reports" element={<Reports />} />
  <Route path="/user/new-user" element={<NewUser />} />

  {/* ================= PAGES → ACCOUNTS ================= */}
  <Route path="/accounts/setting" element={<Setting />} />
  <Route path="/accounts/billing" element={<Billing />} />
  <Route path="/accounts/invoice" element={<Invoice />} />
  <Route path="/accounts/security" element={<Security />} />

  {/* ================= PAGES → PROJECTS ================= */}
  <Route path="/projects/pricing" element={<Pricing />} />
  <Route path="/projects/charts" element={<Charts />} />
  <Route path="/projects/notification" element={<Notification />} />
  <Route path="/projects/chat" element={<Chat />} />

  {/* ================= APPLICATIONS ================= */}
  <Route path="/applications/kanban" element={<Kanban />} />
  <Route path="/applications/wizard" element={<Wizard />} />
  <Route path="/applications/data-tables" element={<DataTables />} />
  <Route path="/applications/calendar" element={<Calendar />} />

  {/* ================= E-COMMERCE ================= */}
  <Route path="/ecommerce/products/new" element={<NewProducts />} />
  <Route path="/ecommerce/products/edit" element={<EditProducts />} />
  <Route path="/ecommerce/products/list" element={<ProductList />} />

  <Route path="/ecommerce/orders/list" element={<OrderList />} />
  <Route path="/ecommerce/orders/details" element={<OrderDetails />} />

  {/* ================= AUTH ================= */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
  )
}

export default Mainroutes
