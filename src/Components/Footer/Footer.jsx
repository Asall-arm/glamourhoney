import React, { use } from "react";
import FooterItem from "./FooterItem/FooterItem";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import EndlessFooter from "./EndlessFooter";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-widgets">
          <div className="row">
            <FooterItem title="درباره ما">
              <p className="footer-widgets__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              </p>
            </FooterItem>

            <FooterItem title="آخرین مقالات">
              <div className="footer-widgets__links">
                <a href="#" className="footer-widgets__link"onClick={() => navigate('/Articles/singlearticle')}>
مقاله اول
                </a>
                <a href="#" className="footer-widgets__link"onClick={() => navigate('/Articles/singlearticle')}>
                مقاله دوم
                </a>
                <a href="#" className="footer-widgets__link"onClick={() => navigate('/Articles/singlearticle')}>
                مقاله سوم
                </a>
              </div>
            </FooterItem>

            <FooterItem title="محصولات ما">
              <div className="row">
                <div className="col-6">
                  <a href="#" className="footer-widgets__link"onClick={() => navigate('/singleproduct')}>
                    محصول اول
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link"onClick={() => navigate('/singleproduct')}>
                  محصول دوم
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link"onClick={() => navigate('/singleproduct')}>
                  محصول سوم
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-widgets__link"onClick={() => navigate('/singleproduct')}>
                  محصول چهارم
                  </a>
                </div>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>
      <EndlessFooter />
    </footer>
  );
}
