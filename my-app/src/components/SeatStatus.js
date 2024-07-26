// src/components/SeatTracker.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const SeatTracker = () => {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch seat data from the server
    axios
      .get("http://localhost:3000/seats")
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the seat data!", error);
      });
  }, []);

  const handleSeatUpdate = (seatId) => {
    // Update seat status (example implementation)
    axios
      .post("http://localhost:3000/seats", { seatId })
      .then((response) => {
        setSeats(response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the seat status!", error);
      });
  };

  return (
    <div>
      <h1>Seat Tracker</h1>
      <div className="seat-container">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${seat.isAvailable ? "available" : "unavailable"}`}
            onClick={() => handleSeatUpdate(seat.id)}
          >
            {seat.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatTracker;
