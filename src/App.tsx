import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLoginForm from "./ui/organisms/UserLoginForm";
import RegisterPage from "./ui/pages/register/RegisterPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./ui/pages/dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLoginForm />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
