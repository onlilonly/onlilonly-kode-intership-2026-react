import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { UserPage } from "./pages/UserPage/UserPage";
import { ErrorBlockPage } from "./pages/ErrorPage/ErrorPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/users" />} />
            <Route path="/users" element={<HomePage />} />
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="*" element={<ErrorBlockPage/>} />
        </Routes>
    );
};

export default App;
