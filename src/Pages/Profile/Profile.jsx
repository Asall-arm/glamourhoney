import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer';
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/users/1") 
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <>
      <Navbar />

        <div className=" profile-page">
          <h1 className="profile-title">پروفایل کاربر</h1>
          <div className="profile-info">
            <p><strong>نام:</strong> {user.firstname} {user.lastname}</p>
            <p><strong>ایمیل:</strong> {user.email}</p>
            <p><strong>شماره تماس:</strong> {user.phone}</p>
            <p><strong>آدرس:</strong> {user.address}</p>
            <p><strong>امتیاز:</strong> {user.score}</p>
            <p><strong>مجموع خرید:</strong> {user.buy}</p>
          </div>
        </div>

      <Footer />
    </>
  );
};

export default Profile;