import React from 'react'
import './AllProductsBox.css'
import { useNavigate } from 'react-router-dom';

const AllProductsBox = ({ product }) => {
  const navigate =useNavigate()
    return (
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3 onClick={() => navigate('/singleproduct')}>{product.name}</h3>
        <p>{product.price} تومان</p>
        <button>افزودن به سبد خرید</button>
      </div>
    );
  };

export default AllProductsBox
