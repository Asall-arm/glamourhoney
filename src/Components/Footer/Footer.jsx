import React from "react";
import "./Footer.css";
import EndlessFooter from "./EndlessFooter";

const Footer = () => {
  return (
    <footer>
      {/* بالا */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>درباره ما</h4>
          <p>
            گلمور هانی برندی لوکس در دنیای مد است؛ ترکیبی از سبک کلاسیک و مدرن با کیفیتی بی‌نظیر.
          </p>
        </div>

        <div className="footer-column">
          <h4>آخرین مقالات</h4>
          <ul>
            <li><a href="#">مقاله اول</a></li>
            <li><a href="#">مقاله دوم</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>محصولات ما</h4>
          <ul>
            <li><a href="#">محصول اول</a></li>
            <li><a href="#">محصول دوم</a></li>
            <li><a href="#">محصول سوم</a></li>
            <li><a href="#">محصول چهارم</a></li>
          </ul>
        </div>

        <div className="footer-column newsletter">
          <h4>عضویت در خبرنامه</h4>
          <form>
            <input type="email" placeholder="ایمیل خود را وارد کنید" />
            <button type="submit">عضویت</button>
          </form>
        </div>
      </div>

      <EndlessFooter />
    </footer>
  );
};

export default Footer;