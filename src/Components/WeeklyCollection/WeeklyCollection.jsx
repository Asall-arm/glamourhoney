import React, { useEffect, useState } from 'react';
import './WeeklyCollection.css';

const WeeklyCollection = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/collections')
      .then(res => res.json())
      .then(data => {
        setCollections(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("خطا در بارگذاری کالکشن‌ها:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="weekly-collection">
      <h2 className="weekly-title">کالکشن هفتگی</h2>
      <div className="weekly-grid">
        {collections.map((item) => (
          <div className="weekly-collection-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="caption">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyCollection;