import React, { useEffect, useState } from "react";
import { ThemeProvider, useTheme } from './components/ThemeContext.jsx';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  const { theme } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');

  useEffect(() =>{
    if(theme === 'light'){
      setBackgroundColor('white');
      setTextColor('black');
    } else {
      setBackgroundColor('black');
      setTextColor('white');
    }
  }, [theme]);

  return (
    <div className="App" style={{ backgroundColor, color: textColor }}>
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
