import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(() => {
        // Check localStorage on initial load
        return   localStorage.getItem('theme') ||
          'light' ;
    });
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode === "dark");
        localStorage.setItem("theme", darkMode);
    }, [darkMode]);
    // useEffect(() => {
    //     if (darkMode) {
    //         document.documentElement.classList.add('dark');
    //         localStorage.setItem('theme', 'dark');
    //     } else {
    //         document.documentElement.classList.remove('dark');
    //         localStorage.setItem('theme', 'light');
    //     }
    // }, [darkMode]);

    const toggleTheme = () => setDarkMode(prev => prev ==="dark" ? "light" : "dark");

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for using the theme
export const useTheme = () => useContext(ThemeContext);





