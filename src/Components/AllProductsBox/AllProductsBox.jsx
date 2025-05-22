import React from 'react'
import './AllProductsBox.css'
const AllProductsBox = ({ product }) => {
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <button>افزودن به سبد خرید</button>
      </div>
    );
  };

export default AllProductsBox
