import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Checkout.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => {
    const cleanedPrice = +item.price.replace(/[^0-9]/g, "");
    return acc + cleanedPrice * item.quantity;
  }, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("سفارش شما با موفقیت ثبت شد!");
    localStorage.removeItem("cart");
    window.location.href = "/";
  };

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h1>تکمیل سفارش</h1>
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <label>نام و نام خانوادگی:</label>
            <input type="text" required placeholder="مثال: سارا احمدی" />

            <label>شماره تماس:</label>
            <input type="tel" required placeholder="مثال: 09123456789" />

            <label>آدرس کامل:</label>
            <textarea rows="3" required placeholder="مثال: تهران، خیابان ولیعصر، کوچه بهار، پلاک 12" />

            <label>روش پرداخت:</label>
            <select required>
              <option value="">انتخاب کنید</option>
              <option value="online">پرداخت آنلاین</option>
              <option value="delivery">پرداخت هنگام تحویل</option>
            </select>

            <button type="submit" className="submit-order-btn">ثبت سفارش</button>
          </form>

          <div className="order-summary">
            <h2>خلاصه سفارش</h2>
            {cartItems.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <p>{item.quantity} × {item.price}</p>
                </div>
              </div>
            ))}
            <hr />
            <h3>مبلغ نهایی: {totalPrice.toLocaleString()} تومان</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;