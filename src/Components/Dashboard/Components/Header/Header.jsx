import React from 'react'
import "./Header.css"
import ProfPic from "../../../../../public/logo3.jpeg"
import { CiBellOn } from "react-icons/ci";
import { CiLight } from "react-icons/ci";

const Header = () => {
  return (
    <div className='header'>
      <div className='admin-profile'>
        <img src={ProfPic} alt="AdminProfPic" />
        <div>
          <h1> عسل رحیمی</h1>
          <h3>
            برنامه‌نویس فرانت‌اند
          </h3>
        </div>
      </div>
      
      <div className="header-left-section">
          <div className="search-box">
            <input type="text" placeholder='جست‌وجو کنید...' />
            <button>جست‌وجو</button>
          </div>

          <button className='header-left-icon'><CiBellOn /></button>
          <button className='header-left-icon'><CiLight /></button>
        </div>
    </div>
  )
}

export default Header
