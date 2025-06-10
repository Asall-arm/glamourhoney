import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import axios from 'axios';
import './Articles.css';

const Articles = () => {
  const [allArticles, setAllArticles] = useState([]);

  const fetchAllArticles = async () => {
    try {
      const res = await axios('http://localhost:3000/allArticles');
      setAllArticles(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllArticles();
  }, []);

  return (
    <div className="articles-wrapper">
      <Navbar />
      <section className="articles-page">
        <h2 className="articles-title">مقالات</h2>
        <div className="articles-container">
          {allArticles.map((article, index) => (
            <ArticleCard 
              key={index}
              image={article.image}
              title={article.title}
              author={article.author}
              readers={article.readers}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Articles;