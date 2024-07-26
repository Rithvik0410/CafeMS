import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Main = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Redirection logic based on user agent
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Navigate to the mobile homepage
      navigate("/desktop-homepage");
    } else {
      // Navigate to the desktop homepage
      navigate("/desktop-homepage");
    }
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default Main;
