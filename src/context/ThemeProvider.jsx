import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const defaultTheme = {
  "--color-bg": "#ffffff",
  "--color-text": "#222222",
  "--color-honey": "#b88f2d",
  "--color-button-hover": "#a07b1e",
  "--color-border": "#eeeeee",
  "--color-neutral": "#f9f9f9"
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? JSON.parse(saved) : defaultTheme;
  });

  useEffect(() => {
    // اعمال رنگ‌ها به :root
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;