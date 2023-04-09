import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLoginForm from "./ui/organisms/UserLoginForm";
import RegisterPage from "./ui/pages/register/RegisterPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLoginForm />} />
          <Route path='/register' element={<RegisterPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
