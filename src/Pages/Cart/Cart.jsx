import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemove = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, delta) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const cleanedPrice = +item.price.replace(/[^0-9]/g, "");
    return acc + cleanedPrice * item.quantity;
  }, 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>سبد خرید شما</h1>
        {cartItems.length === 0 ? (
          <p className="empty-cart">سبد خرید خالی است</p>
        ) : (
          <>
          <div className="cart-left">
            <div className="cart-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-details">
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                    <div className="quantity-control">
                      <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>🗑 حذف</button>
                  </div>
                </div>
              ))}
            </div>
            </div>
            <div className="cart-summary">
              <h3>مبلغ کل: {totalPrice.toLocaleString()} تومان</h3>
              <button className="checkout-btn">ادامه فرایند خرید</button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;