import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, ErrorPage, HomePage, LoginPage, Navbar } from ".";
import { UserProvider } from "./context";

export const MainApp = () => {
    return (
        <UserProvider>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="error" element={<ErrorPage />} />

                <Route path="/*" element={<Navigate to="/error" />} />



            </Routes>
        </UserProvider>
    )
}
