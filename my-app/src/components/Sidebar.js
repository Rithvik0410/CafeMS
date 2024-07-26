import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css"; // Add styles for the sidebar

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li>
          <Link to="menu">Manage Menu</Link>
        </li>
        <li>
          <Link to="orders">Manage Orders</Link>
        </li>
        <li>
          <Link to="users">Manage Users</Link>
        </li>
        <li>
          <Link to="reports">Sales Reports</Link>
        </li>
        <li>
          <Link to="feedback">User Feedback</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
