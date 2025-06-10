import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('نام کاربری یا رمز عبور نادرست است.');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-wrapper">
        <div className="login-card">
          <h2 className="login-title">
            هنوز ثبت‌نام نکردید؟{' '}
            <button  onClick={() => navigate('/register')} className="login-register-btn">
              همین حالا ثبت‌نام کنید
            </button>
          </h2>
          <p className="login-subtitle">فرم ورود :</p>
          <form onSubmit={handleSubmit} className="login-form">
            {error && <div className="login-error">{error}</div>}
            <input
              className="login-input"
              type="text"
              placeholder="نام کاربری"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              className="login-input"
              type="password"
              placeholder="رمز عبور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button" disabled={loading}>
              {loading ? 'در حال ورود...' : 'ورود'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;