import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Ensure this path is correct

const formatPrice = (price) => `₹${price.toFixed(2)}`;

const Breakfast = () => {
  const { cart, incrementItem, decrementItem } = useContext(CartContext);

  const products = [
    {
      name: "Masala Dosa",
      price: 50,
      image:
        "https://apollosugar.com/wp-content/uploads/2018/12/Masala-Dosa.jpg",
    },
    {
      name: "Idli-Vada",
      price: 40,
      image:
        "https://t4.ftcdn.net/jpg/04/65/28/87/360_F_465288715_F3uc0aZMhzSbNbftEzHSb6RfUVQfCHeU.jpg",
    },
    {
      name: "Neer Dosa",
      price: 30,
      image:
        "https://myfoodstory.com/wp-content/uploads/2022/07/Neer-Dosa-1.jpg",
    },
    {
      name: "Avalakki",
      price: 20,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmksFq3upP8H2kfBgr-Wu164zrono53IhUA&s",
    },
    {
      name: "Puri Bhaji",
      price: 35,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG0uduLlt0XLC-uWvJNEVk7Sa3_5T2mGFwhQ&s",
    },
    {
      name: "Pulao",
      price: 40,
      image:
        "https://www.chefkunalkapur.com/wp-content/uploads/2022/11/DSC05514-1300x731.jpg?v=1667931759",
    },
    {
      name: "Upma",
      price: 25,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0de1eEupTPb0iTslAZVZ4n469Md4oyPMd1w&s",
    },
    {
      name: "Buns",
      price: 30,
      image:
        "https://rakskitchen.net/wp-content/uploads/2020/05/mangalore-buns-500x375.jpg",
    },
    {
      name: "Ragi Mudde",
      price: 25,
      image:
        "https://recipes.net/wp-content/uploads/2024/01/how-to-eat-ragi-mudde-1706099478.jpg",
    },
  ];

  const getQuantity = (productName) => {
    const item = cart.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <header
        className="text-white d-flex justify-content-between align-items-center py-3 px-4"
        id="head"
      >
        <img
          src="https://azpireeducations.com/uploads/institutions/70d61dcea2bd2f4649c18bc0f341302e.png"
          alt="Logo"
          className="header-logo"
        />
        <h1 className="header-text m-0">Sahyadri Canteen</h1>
        <button
          className="blinking-live"
          onClick={() =>
            (window.location.href = "http://localhost:3004/student.html")
          }
        >
          LIVE
        </button>
      </header>

      <div className="container mt-4">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.name}>
              <div className="card product-card">
                <img
                  src={product.image}
                  className="card-img-top product-image"
                  alt={product.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">
                    Price: {formatPrice(product.price)}
                  </p>
                  <div className="button-container">
                    <button
                      className="btn btn-secondary"
                      onClick={() => decrementItem(product)}
                      disabled={getQuantity(product.name) === 0}
                    >
                      -
                    </button>
                    <span className="mx-2">{getQuantity(product.name)}</span>
                    <button
                      className="btn btn-primary"
                      onClick={() => incrementItem(product)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout Button */}
        <div className="text-center mt-4">
          <Link to="/checkout" className="btn btn-success">
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breakfast;
