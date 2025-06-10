import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:3000/users/1"); // تغییر id به دلخواه ممکنه
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error("خطا در دریافت اطلاعات کاربر:", error);
      }
    };
    fetchUser();
  }, []);

  if (!user) return <p className="loading">در حال بارگذاری اطلاعات کاربر...</p>;

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-image-wrapper">
            <img src={user.avatar || "/images/default-avatar.png"} alt="Avatar" />
          </div>

          <div className="profile-details">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">📧 {user.email}</p>
            <p className="profile-phone">📞 {user.phone}</p>
            <p className="profile-address">📍 آدرس: {user.address || "ثبت نشده"}</p>
            <p className="profile-score">⭐ امتیاز: {user.score || "۰"}</p>
            <p className="profile-total">💳 مجموع خرید: {user.totalPurchase || "۰"} تومان</p>
            <p className="profile-bio">📝 بیوگرافی: {user.bio || "ثبت نشده"}</p>

            <button className="edit-button">ویرایش پروفایل</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;