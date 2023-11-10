import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  return (
    <Router> 
      <Routes>
        <Route path = '/' element = {<LandingPage />}/>
        <Route path = '/login' element = {<LoginPage />}/>
        <Route path = '/signup' element = {<SignupPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
