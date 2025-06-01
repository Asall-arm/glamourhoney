import React from "react";
import { useNavigate } from "react-router-dom";
import Slider1 from "../../../public/1.jpg";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="header-section">
      <img src={Slider1} alt="banner" className="header-image" />
      <div className="overlay">
        <h1 className="header-logo">Glamour Honey</h1>
        <div className="button-group">
          <button onClick={() => navigate('/products/allwomenproduct')} className="header-button">زنانه</button>
          <button onClick={() => navigate('/products/allmenproduct')} className="header-button">مردانه</button>
          <button onClick={() => navigate('/products/allkidsproduct')} className="header-button">بچگانه</button>
        </div>
      </div>
    </section>
  );
};

export default Header;