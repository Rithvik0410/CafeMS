import React from "react";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div className="wrapper">
      <h1>Welcome to Sahyadri Canteen</h1>
      <br />
      <button
        type="button"
        className="btn"
        onClick={() => handleNavigate("login1")}
      >
        Admin
      </button>
      <br />
      <br />
      <button
        type="button"
        className="btn"
        onClick={() => handleNavigate("login")}
      >
        Student/Faculty
      </button>
      <br />
    </div>
  );
};

export default IndexPage;
