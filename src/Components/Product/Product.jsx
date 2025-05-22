import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { title, price, image } = product;

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
      <h2 className="product-title">{name}</h2>
      <p className="product-price">{price} تومان</p>
      <button className="add-button" onClick={addToCart}>
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default Product;
