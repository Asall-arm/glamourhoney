import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => navigate('/')}>
          <img src="/logo.jpeg" alt="Glamour Honey" className="logo" />
          <span>Glamour Honey</span>
        </div>

        {/* Burger Icon */}
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Links + Buttons */}
        <div className={`navbar-links-container ${menuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <Link to="/" className="nav-link">صفحه اصلی</Link>
            <Link to="/articles" className="nav-link">مقاله‌ها</Link>
            <div className="dropdown">
              <span className="dropdown-toggle">دسته‌بندی محصولات</span>
              <div className="dropdown-menu">
                <span onClick={() => navigate('/products')}>تمام محصولات</span>
                <span onClick={() => navigate('/products/allwomenproduct')}>زنانه</span>
                <span onClick={() => navigate('/products/allmenproduct')}>مردانه</span>
                <span onClick={() => navigate('/products/allkidsproduct')}>بچگانه</span>
              </div>
            </div>
          </nav>

          <div className="navbar-right">
            <form className="search-form">
              <input
                type="text"
                placeholder="عبارت مد نظر را وارد کنید..."
                className="search-input"
              />
              <button type="submit" className="search-button">جست‌وجو</button>
            </form>

            <div className="auth-buttons">
              <Link to="/register" className="btnn">ثبت‌نام</Link>
              <Link to="/login" className="btnn">ورود</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;