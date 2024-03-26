"use client";

import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState("light");

    // const handleThemeChange = () => {
    //     if (
    //         localStorage.theme === "dark" ||
    //         (!("theme" in localStorage) &&
    //             window.matchMedia("(prefers-color-scheme: dark)").matches)
    //     ) {
    //         setMode("dark");
    //         document.documentElement.classList.add("dark");
    //     } else {
    //         setMode("light");
    //         document.documentElement.classList.remove("dark");
    //     }
    // };
    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (!localTheme) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                setMode("dark");
            }
        } else {
            setMode(localStorage.getItem("theme") || "");
        }
    }, []);
    useEffect(() => {
        if (mode === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }, [mode]);
    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Error accessing context.");
    }
    return context;
}
