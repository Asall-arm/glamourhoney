import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './SingleProduct.css';

const product = {
    id: 1,
    name: 'محصول نمونه',
    price: 250000,
    stock: 5,
    description: 'این یک توضیح کوتاه درباره محصول است.',
    imageUrl: '../../../public/logo.jpeg',
    reviews: [
      { id: 1, name: 'علی', comment: 'محصول عالی است!', rating: 5 },
      { id: 2, name: 'سارا', comment: 'کیفیت خوبی دارد.', rating: 4 },
    ],
  };
  
  const SingleProduct = () => {
    return (<><Navbar />
       <div className="singleproduct-container">
      <div className="singleproduct-card">
        <img src={product.imageUrl} alt={product.name} className="singleproduct-image" />
        <div className="singleproduct-info">
          <h1 className="singleproduct-title">{product.name}</h1>
          <p className="singleproduct-price"><strong>قیمت:</strong> {product.price.toLocaleString()} تومان</p>
          <p className="singleproduct-rating"><strong>امتیاز:</strong> {product.reviews.length > 0 ? product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length : 'بدون امتیاز'}</p>
          <p className="singleproduct-stock"><strong>تعداد باقی‌مانده:</strong> {product.stock}</p>
        </div>
      </div>

      <div className="reviews-container">
        <h2 className="reviews-title">نظرات کاربران</h2>
        {product.reviews.length > 0 ? (
          product.reviews.map(review => (
            <div key={review.id} className="review-card">
              <p><strong>{review.name}</strong> (امتیاز: {review.rating})</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>هیچ نظری وجود ندارد.</p>
        )}
      </div>
    </div>
      <Footer /> </>
    );
  };
  
  export default SingleProduct;
  
