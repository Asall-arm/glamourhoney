import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./SingleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const [allproducts, setAllproducts] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/allproducts/${id}`);
      const data = await res.json();
      setAllproducts(data);
    } catch (error) {
      console.error("خطا در دریافت محصول:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === allproducts.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...allproducts, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("محصول به سبد خرید اضافه شد!");
  };

  if (!allproducts) return <p className="loading">در حال بارگذاری...</p>;

  return (
    <>
      <Navbar />
      <div className="single-product-container">
        <div className="product-image-wrapper">
          <img src={allproducts.image} alt={allproducts.name} />
        </div>

        <div className="product-details">
          <h1 className="product-name">{allproducts.name}</h1>
          <p className="product-price">{allproducts.price} تومان</p>
          <p className="product-description">{allproducts.popularity} %</p>
          <span className="product-description">{allproducts.colors} رنگ</span>
          <button className="add-to-cart-btn" onClick={addToCart}>
            افزودن به سبد خرید
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;