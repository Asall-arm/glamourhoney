import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import { MdDateRange } from "react-icons/md";

const Testimonials = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/comments')
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('خطا در دریافت نظرات:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="testimonials">
      <h2>نظرات مشتریان</h2>
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : (
        <div className="testimonial-list">
          {comments.map((comment) => (
            <div key={comment.id} className="testimonial-card">
              <p>"{comment.description}"</p>
              <span>— {comment.name}</span>
              <span><MdDateRange /> {comment.date}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Testimonials;