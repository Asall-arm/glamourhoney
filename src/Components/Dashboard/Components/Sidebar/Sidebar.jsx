import React, { useState } from "react";
import "./Sidebar.css";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TiHeart } from "react-icons/ti";

const Sidebar = () => {
  const [activeKey, setActiveKey] = useState('/dashboard');
  
  const navigate = useNavigate();
  const handleNavigation = (path) => {
    setActiveKey(path); 
    navigate(path);
  };


  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <h1>سلام عسل </h1>
        <h4>خوش برگشتی
          <span> <TiHeart /></span>
        </h4>
      </div>
      <Nav className="flex-column sidebar-links">
      <Nav.Link 
          onClick={() => handleNavigation('/dashboard')} 
          className={activeKey === '/dashboard' ? 'active' : ''}>
            صفحه اصلی
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleNavigation('/dashboard/amountproducts')} 
          className={activeKey === '/dashboard/amountproducts' ? 'active' : ''}>
          مقدار محصولات
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleNavigation('/dashboard/comments')} 
          className={activeKey === '/dashboard/comments' ? 'active' : ''}>
          کامنت‌ها
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleNavigation('/dashboard/users')} 
          className={activeKey === '/dashboard/users' ? 'active' : ''}>
          کاربران
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleNavigation('/dashboard/orders')} 
          className={activeKey === '/dashboard/orders' ? 'active' : ''}>
          سفارشات
        </Nav.Link>
        <Nav.Link 
          onClick={() => handleNavigation('/dashboard/off')} 
          className={activeKey === '/dashboard/off' ? 'active' : ''}>
          تخفیف‌ها
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
