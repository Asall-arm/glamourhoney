import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('https://your-api-endpoint.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      navigate('/home');
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-wrapper">
        <div className="register-card">
          <h2 className="register-title">
            قبلاً ثبت‌نام کردید؟{' '}
            <button className="register-login-btn" onClick={() => navigate('/login')}>
              وارد شوید
            </button>
          </h2>
          <p className="register-subtitle">لطفاً فرم زیر را تکمیل کنید.</p>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="register-input"
            />
            <input
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="register-input"
            />
            <input
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="register-input"
            />
            <button type="submit" className="register-submit-btn">
              ثبت‌نام
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;