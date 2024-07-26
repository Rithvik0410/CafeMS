import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ManageUsers from "./ManageUsers";
import ManageMenu from "./ManageMenu";
import ManageOrders from "./ManageOrders";
import SalesReports from "./SalesReports";
import Feedback from "./Feedback";
import "./adminDashboard.css"; // Add custom styles for the dashboard

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <h1>Admin Dashboard</h1>
        <nav>
          <Link to="/admin/manage-users">Manage Users</Link>
          <Link to="/admin/manage-menu">Manage Menu</Link>
          <Link to="/admin/manage-orders">Manage Orders</Link>
          <Link to="/admin/sales-reports">Sales Reports</Link>
          <Link to="/admin/feedback">Feedback</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="manage-users" element={<ManageUsers />} />
          <Route path="manage-menu" element={<ManageMenu />} />
          <Route path="manage-orders" element={<ManageOrders />} />
          <Route path="sales-reports" element={<SalesReports />} />
          <Route path="feedback" element={<Feedback />} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminDashboard;
