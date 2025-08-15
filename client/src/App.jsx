import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import "./styles/globals.css";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/profile-setup" element={<OtpPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
