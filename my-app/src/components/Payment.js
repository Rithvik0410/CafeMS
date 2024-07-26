import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../payment.css"; // Ensure this path is correct

const Payment = () => {
  return (
    <div className="bg-light text-dark">
      <header
        className="text-dark d-flex justify-content-between align-items-center py-3 px-4"
        id="head"
      >
        <img
          src="https://azpireeducations.com/uploads/institutions/70d61dcea2bd2f4649c18bc0f341302e.png"
          alt="Logo"
          className="header-logo"
        />
        <h1 className="header-text m-0">Sahyadri Canteen</h1>
      </header>

      <div className="container mt-4">
        <h2 className="text-center mb-4">Payment</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="cardNumber" className="form-label">
                  Card Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardNumber"
                  placeholder="Enter your card number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cardName" className="form-label">
                  Card Holder's Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cardName"
                  placeholder="Enter card holder's name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="expiryDate" className="form-label">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="expiryDate"
                  placeholder="MM/YY"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="cvv" className="form-label">
                  CVV
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder="Enter CVV"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
