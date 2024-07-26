import React, { useState, useEffect } from "react";
import axios from "axios";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from server
    axios.get("/api/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleRoleUpdate = () => {
    // Logic for updating user roles
  };

  return (
    <div>
      <h2>Manage Users</h2>
      <button onClick={handleRoleUpdate}>Update Roles</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
