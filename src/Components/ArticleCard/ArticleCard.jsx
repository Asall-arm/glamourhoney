import React from "react";
import "./ArticleCard.css";
import { useNavigate } from 'react-router-dom';

const ArticleCard = ({ image, title, author, readers }) => {
  const navigate = useNavigate();

  return (
    <div className="article-card">
      <img src={image} alt={title} className="article-image" />
      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-author">نویسنده: {author}</p>
        <p className="article-readers">تعداد خواننده‌ها: {readers}</p>
        <button className="read-button" onClick={() => navigate('/Articles/singlearticle')}>
          خواندن مقاله
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;