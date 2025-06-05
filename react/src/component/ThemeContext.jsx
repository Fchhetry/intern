import React, { createContext, useState } from 'react';

// 1. Create the context,ThemeContxt is context  object
export const ThemeContext = createContext();

// 2. Create a provider component, wraps around other components and provides the theme data to them
export function ThemeProvider({ children }) { //children prop renders whatever components are nested inside <ThemeProvider>
  const [theme, setTheme] = useState('light');

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}> {/*wraps */}
      {children}
    </ThemeContext.Provider>
  );
}
 export default ThemeContext;