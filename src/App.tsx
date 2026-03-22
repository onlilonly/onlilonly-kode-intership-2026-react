import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppSelector } from "./hooks/useAppSelector";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { ThemeProvider } from "styled-components";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import { ErrorBlockPage } from "./pages/ErrorPage/ErrorPage";
import { darkTheme, lightTheme } from "./styles/theme";
import { setTheme } from "./store/themeSlice";

const App = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const listener = (e: MediaQueryListEvent) => {
            dispatch(setTheme(e.matches ? "dark" : "light"));
        };
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
            <Routes>
                <Route path="/" element={<Navigate to="/users" />} />
                <Route path="/users" element={<HomePage />} />
                <Route path="/users/:id" element={<UserPage />} />
                <Route path="*" element={<ErrorBlockPage />} />
            </Routes>
        </ThemeProvider>
    );
};

export default App;
