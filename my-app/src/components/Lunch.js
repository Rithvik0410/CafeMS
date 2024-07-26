// src/components/Lunch.js
import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../prd-Homepage.css"; // Ensure this path is correct
const formatPrice = (price) => `₹${price.toFixed(2)}`;

const Lunch = () => {
  const { cart, incrementItem, decrementItem } = useContext(CartContext);

  const products = [
    {
      name: "Chicken Biryani",
      price: 80,
      image:
        "https://static.vecteezy.com/system/resources/previews/035/375/492/large_2x/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg",
    },
    {
      name: "Paneer Butter Masala",
      price: 70,
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg",
    },
    {
      name: "Chole Bhature",
      price: 60,
      image:
        "https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg",
    },
    {
      name: "Rasam Rice",
      price: 35,
      image:
        "https://www.tomatoblues.com/wp-content/uploads/2021/11/one-pot-rasam-sadam-2-500x375.jpg",
    },
    {
      name: "Naan",
      price: 50,
      image:
        "https://c.ndtvimg.com/2020-07/d63ps02g_naan_625x300_09_July_20.jpg",
    },
    {
      name: "Veg Thali",
      price: 60,
      image:
        "https://m.economictimes.com/thumb/msid-106630607,width-1200,height-900,resizemode-4,imgsize-62986/veg-thali-cost.jpg",
    },
    {
      name: "Non-Veg Thali",
      price: 80,
      image:
        "https://145018194.cdn6.editmysite.com/uploads/1/4/5/0/145018194/s896786561886548559_p72_i2_w1024.jpeg",
    },
    {
      name: "Gobi Manchurian",
      price: 50,
      image:
        "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/Gobi-Manchurian.jpg",
    },
    {
      name: "Chicken Kebab",
      price: 45,
      image:
        "https://t4.ftcdn.net/jpg/05/85/17/03/360_F_585170352_7D9PjNXOvU3PAB4ynMRWpEavhBNuLG3J.jpg",
    },
    {
      name: "Curd Rice",
      price: 45,
      image:
        "https://www.vegrecipesofindia.com/wp-content/uploads/2016/07/curd-rice-2-500x500.jpg",
    },
    {
      name: "Fish Curry",
      price: 60,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDyQ_ru7_NTzhT7YIKwspCCAwdrRnq6zxnQ&s",
    },
    // Add more products as needed
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
                  <p className="card-text">
                    {/* Description can be added here */}
                  </p>
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
        <div className="text-center mt-4">
          <Link to="/checkout" className="btn btn-success">
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
