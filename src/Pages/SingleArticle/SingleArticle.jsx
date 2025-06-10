import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./SingleArticle.css";

const SingleArticle = () => {
  return (
    <>
      <Navbar />

      <div className="single-article-layout">
        <div className="article-main">
          <img src="/article.jpeg" alt="Article" className="article-image" />
          <h1 className="article-title">عنوان مقاله اول</h1>
          <p className="article-content">
        اینجا متن مقاله قرار می‌گیرد. شما می‌توانید هر متنی را که می‌خواهید به عنوان محتوای مقاله وارد کنید. 
        این متن می‌تواند شامل اطلاعات مختلفی باشد که شما می‌خواهید به خوانندگان خود ارائه دهید. 
        در این مقاله، ما به بررسی تأثیرات مثبت و منفی فناوری بر روی زندگی روزمره انسان‌ها خواهیم پرداخت. 
        فناوری به سرعت در حال پیشرفت است و این تغییرات بر روی شیوه‌های ارتباطی، کار و تفریح ما تأثیر گذاشته است.
      </p>
      <p className="article-content">
        همچنین، فناوری در زمینه‌های مختلفی مانند آموزش و پرورش، پزشکی و تجارت نیز تغییرات عمده‌ای ایجاد کرده است. 
        .آموزش آنلاین به یک روش رایج تبدیل شد و بسیاری از دانش‌آموزان و دانشجویان مجبور شدند که از خانه‌های خود تحصیل کنند.
      </p>
      <p className="article-content">
        علاوه بر این، فناوری در صنعت پزشکی نیز انقلابی به وجود آورده است. پیشرفت‌های تکنولوژیکی در تشخیص بیماری‌ها و درمان آن‌ها باعث افزایش کیفیت زندگی و طول عمر انسان‌ها شده است.
        با این حال، چالش‌هایی نیز وجود دارد، از جمله نگرانی‌ها درباره حریم خصوصی و امنیت داده‌ها.
      </p>
      <p className="article-content">
        در نهایت، می‌توان گفت که فناوری همواره یک شمشیر دو لبه بوده است. از یک سو، مزایا و فرصت‌های بی‌شماری را برای ما فراهم کرده است، 
        اما از سوی دیگر، چالش‌ها و خطراتی نیز به همراه دارد. بنابراین، مهم است که با آگاهی و مسئولیت از فناوری استفاده کنیم تا بتوانیم از مزایای آن بهره‌مند شویم و آسیب‌های احتمالی را کاهش دهیم.
      </p>
      


          <div className="article-navigation">
            <button className="nav-button">← مقاله قبلی</button>
            <button className="nav-button">مقاله بعدی →</button>
          </div>
        </div>

        <aside className="article-sidebar">
          <section className="sidebar-section">
            <h3 className="sidebar-title">پست‌های مرتبط</h3>
            <ul className="sidebar-list">
              <li><a href="#">تأثیر هوش مصنوعی بر سلامت</a></li>
              <li><a href="#">فناوری و آموزش در آینده</a></li>
              <li><a href="#">زندگی دیجیتال و سلامت روان</a></li>
            </ul>
          </section>

          <section className="sidebar-section">
            <h3 className="sidebar-title">دسته‌بندی‌ها</h3>
            <ul className="sidebar-list">
              <li>فناوری</li>
              <li>سلامت</li>
              <li>آموزش</li>
            </ul>
          </section>

          <section className="sidebar-section">
            <h3 className="sidebar-title">نویسنده</h3>
            <p className="sidebar-author">نوشته شده توسط <strong>عسل رحیمی</strong>  
            |   خرداد ۱۴۰۴</p>
          </section>
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default SingleArticle;