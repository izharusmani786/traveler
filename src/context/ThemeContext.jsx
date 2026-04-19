import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark'
    });

    const toggleMode = () => {
        setIsDark(prev => !prev);
    };

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    return (
        <ThemeContext.Provider value={{ isDark, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};