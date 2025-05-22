import React, { useState } from "react";
import "./Checkout.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("سفارش ثبت شد:", { address, paymentMethod });
    alert("سفارش با موفقیت ثبت شد!");
  };

  return (
    <>
      <Navbar />
      <div className="checkout-page">
        <h1 className="checkout-title">پرداخت نهایی</h1>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <label>
            آدرس ارسال:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>

          <label>
            روش پرداخت:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="online">پرداخت آنلاین</option>
              <option value="cod">پرداخت در محل</option>
            </select>
          </label>

          <button type="submit" className="confirm-btn">
            ثبت سفارش
          </button>
        </form>
      </div>
      <Footer />{" "}
    </>
  );
};

export default Checkout;
