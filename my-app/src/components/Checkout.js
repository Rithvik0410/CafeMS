import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Checkout.css";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  // Calculate total price
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const saveCartData = () => {
    const cartData = {
      date: new Date().toISOString().split("T")[0], // current date in YYYY-MM-DD format
      items: cart.map((item) => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
      })),
      total: getTotalPrice(),
    };
    // Store the cart data to localStorage
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Checkout</h1>
      <div className="list-group">
        {cart.map((item) => (
          <div
            key={item.name}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{item.name}</span>
            <span>
              {item.quantity} x ₹{item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <h3>Total: ₹{getTotalPrice().toFixed(2)}</h3>
        <Link
          to="/payment"
          className="btn btn-primary mt-3"
          onClick={saveCartData}
        >
          Proceed to Payment
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
