import React from "react";
import Slider1 from "../../../public/1.jpg";
// import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Header.css"
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="position-relative">
        <img src={Slider1} alt="" className="img-fluid w-100" />
        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-start bg-black bg-opacity-10">
          <h1 className="ms-3 mb-4">Glamour Honey</h1>
          <div className="ms-3">
            <button  className="m-2 header-title" onClick={() => navigate('/products/allwomenproduct')}>زنانه</button>
            <button className="m-2 header-title" onClick={() => navigate('/products/allmenproduct')}>مردانه</button>
            <button className="m-2 header-title" onClick={() => navigate('/products/allkidsproduct')}>بچگانه</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
