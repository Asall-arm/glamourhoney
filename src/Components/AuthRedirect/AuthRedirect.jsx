import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // اگر توکن وجود داشت کاربر به داشبورد هدایت شود
      navigate('/dashboard');
    } else {
      // اگر توکن نبود، کاربر به لاگین فرستاده شود
      navigate('/login');
    }
  }, [navigate]);

  return null; // چیزی نمایش نمی‌ده فقط ریدایرکت انجام می‌ده
};

export default AuthRedirect;