import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

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
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error('نام کاربری یا رمز عبور نادرست است.');
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            // window.location.href = '/dashboard';
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="app-container">
                <div className="login-container">
                    <h2 className='color-text'>
                        هنوز ثبت‌نام نکردید، {' '}
                        <a href="/register" className="register-button">
                            همین حالا ثبت‌نام کنید
                        </a>
                    </h2>
                    <form onSubmit={handleSubmit} className="login-form">
                        <p className='color-text'>فرم ورود :</p>
                        {error && <div className="error">{error}</div>}
                        <input className='login-form-input'
                            type="text"
                            placeholder="نام کاربری:"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <br /><br />
                        <input  className='login-form-input'
                            type="password"
                            placeholder="رمز عبور:"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br /><br />
                        <button type="submit" className="register-button" disabled={loading}>
                            {loading ? 'در حال ورود ...' : 'وارد شوید'}
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;