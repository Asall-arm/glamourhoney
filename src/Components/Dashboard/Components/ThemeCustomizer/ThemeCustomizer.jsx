import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './ThemeCustomizer.css'

const ThemeCustomizer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (e, key) => {
    const newTheme = { ...theme, [key]: e.target.value };
    setTheme(newTheme);
  };

  return (
    <div className="theme-customizer">
      <h2>سفارشی‌سازی رنگ سایت</h2>
      <label>
        رنگ پس‌زمینه:
        <input type="color" value={theme["--color-bg"]} onChange={(e) => handleChange(e, "--color-bg")} />
      </label>
      <label>
        رنگ متن:
        <input type="color" value={theme["--color-text"]} onChange={(e) => handleChange(e, "--color-text")} />
      </label>
      <label>
        رنگ اصلی (honey):
        <input type="color" value={theme["--color-honey"]} onChange={(e) => handleChange(e, "--color-honey")} />
      </label>
    </div>
  );
};

export default ThemeCustomizer;