import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage, ErrorPage, HomePage, LoginPage } from ".";

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="error" element={<ErrorPage />} />

                <Route path="/*" element={<Navigate to="/error" />} />



            </Routes>
        </>
    )
}
