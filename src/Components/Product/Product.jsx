import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { name, price, image } = product;
  const navigate = useNavigate()
  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("محصول به سبد خرید اضافه شد!");
  };

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h2 onClick={() => navigate(`/singleproduct/${product.id}`)} className="product-title">{name}</h2>
      <p className="product-price">{price} تومان</p>
      <button className="add-button" onClick={addToCart}>
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default Product;
