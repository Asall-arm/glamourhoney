import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ArticleCard from '../../Components/ArticleCard/ArticleCard'

import './Articles.css'
import axios from 'axios'

const Articles = () => {
  let [ allArticles, setAllArticles ] = useState([])
  const fetchAllArticles = async () => {
    try {
      let res = await axios("http://localhost:3000/allArticles");
      setAllArticles(res.data);
      console.log(allArticles);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAllArticles();
  },[]);

  
  return (
    <div>
      <Navbar />
      <div className="articles-page">
            <h2>مقالات</h2>
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
        </div>
      <Footer />
    </div>
  )
}

export default Articles
