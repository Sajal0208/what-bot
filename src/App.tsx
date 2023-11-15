import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import InitUser from "./components/InitUser";
import PrivatePage from "./pages/PrivatePage/PrivatePage";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Router> 
      <InitUser />
      <Routes>
        <Route element = {<PrivateRoutes />}>
          <Route element = {<LandingPage />} path = '/' />
          <Route element = {<PrivatePage />} path = '/private' />
        </Route>
        <Route path = '/login' element = {<LoginPage />}/>
        <Route path = '/signup' element = {<SignupPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
