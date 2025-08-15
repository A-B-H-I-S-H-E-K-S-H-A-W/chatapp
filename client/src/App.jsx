import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import "./styles/globals.css";
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import ProfileSetup from "./pages/ProfileSetup";
import WhatsAppInterface from "./pages/WhatsAppInterface";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/otp" element={<OtpPage />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute redirectTo="/login">
                <WhatsAppInterface />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
