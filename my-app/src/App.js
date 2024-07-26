import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Register1 from "./components/Register(Admin)";
import Main from "./components/Main";
import Login1 from "./components/Login(Admin)";
import DesktopHomepage from "./components/DesktopHomepage";
import IndexPage from "./components/IndexPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Snacks from "./components/Snacks";
import Checkout from "./components/Checkout";
import { CartProvider } from "./components/CartContext";
import Payment from "./components/Payment";
import SeatStatus from "./components/SeatStatus";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login1" element={<Login1 />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register1" element={<Register1 />} />
          <Route path="/main" element={<Main />} />
          <Route path="/desktop-homepage" element={<DesktopHomepage />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/snacks" element={<Snacks />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/seat-status" element={<SeatStatus />} />

          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
