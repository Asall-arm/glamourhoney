import React from "react";
import "./Collection.css";
import img1 from "../../../public/women.jpg";
import img2 from "../../../public/men.jpg";
import img3 from "../../../public/kids.jpg";
import img4 from "../../../public/new.jpg";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  const navigate = useNavigate();

  const collections = [
    { id: 1, title: "زنانه", img: img1, path: "/products/allwomenproduct" },
    { id: 2, title: "مردانه", img: img2, path: "/products/allmenproduct" },
    { id: 3, title: "بچگانه", img: img3, path: "/products/allkidsproduct" },
    { id: 4, title: "جدیدترین‌ها", img: img4, path: "/products/new" },
  ];

  return (
    <section className="collections-section">
      {collections.map((item) => (
        <div
          key={item.id}
          className="collection-card"
          style={{ backgroundImage: `url(${item.img})` }}
          onClick={() => navigate(item.path)}
        >
          <div className="overlay-text">{item.title}</div>
        </div>
      ))}
    </section>
  );
};

export default Collections;
