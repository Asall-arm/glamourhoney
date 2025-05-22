import React, { useEffect, useState } from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <h1 className="cart-title">سبد خرید</h1>

        {cartItems.length ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>نام محصول</th>
                  <th>تعداد</th>
                  <th>قیمت واحد</th>
                  <th>قیمت کل</th>
                  <th>عملیات</th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price} تومان</td>
                    <td>{item.price * item.quantity} تومان</td>
                    <td>
                      <button className="cart-btn" onClick={() => removeItem(item.id)}>حذف</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-summary">
              <p>
                <strong>مبلغ کل:</strong> {totalPrice} تومان
              </p>
              <button className="checkout-btn">ثبت سفارش</button>
            </div>
          </>
        ) : (
          <p className="empty-cart">سبد خرید شما خالی است.</p>
        )}
      </div>
      <Footer />{" "}
    </>
  );
};

export default Cart;
