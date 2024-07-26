// src/contexts/CartContext.js
import React, { createContext, useState } from "react";
import "../Checkout.css";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const incrementItem = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const decrementItem = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.name === item.name && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, incrementItem, decrementItem }}>
      {children}
    </CartContext.Provider>
  );
};
