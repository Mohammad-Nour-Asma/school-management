import { Routes, Route } from "react-router-dom";
import ExamPage from "./ExamPage";
import Setting from "./Setting";
import Classes from "./Classes";
import Certificates from "./Certificates";
import LandingPage from "../features/Landing/LandingPage";
import RegisterForm from "../pages/auth/component/register/RegisterForm";

function HomePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/Exams" element={<ExamPage />} />
        <Route path="/Classes" element={<Classes />} />
        <Route path="/Certificates" element={<Certificates />} />
        <Route path="/Setting" element={<Setting />} /> */}
      </Routes>
    </>
  );
}
export default HomePage;
