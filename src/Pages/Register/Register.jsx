import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Register.css';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'


const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // استفاده از useNavigate

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await fetch('https://your-api-endpoint.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      navigate('/home'); // تغییر به navigate
    } else {
      console.error('Registration failed');
    }
  };

  return (<><Navbar />
    <div className="container">
      <div className="form-container">
        <h2 className="title">قبلا ثبت‌نام کردید،<button className="login-button" onClick={() => navigate('/login')}>وارد شوید.</button></h2>
        <p className="subtitle">لطفا فرم زیر را تکمیل کنید.</p>
        <form onSubmit={handleRegister}>
        <input 
            type="text" 
            placeholder="نام و نام خانوادگی" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="input"
          />
          <input 
            type="text" 
            placeholder="نام  کاربری" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
            className="input"
          />
          <input 
            type="password" 
            placeholder="رمز عبور" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            className="input"
          />
          <button type="submit" className="submit-button">ثبت نام</button>
        </form>
      </div>
    </div><Footer /></>
  );
};

export default Register;
