import {BrowserRouter,Routes, Route} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import LoginComponent from './pages/Auth/Login';
import RegisterComponent from './pages/Auth/Register';
import ForgetPasswordComponent from './pages/Auth/ForgetPassword';
import ResetPasswordComponent from './pages/Auth/ResetPassword';

import HomeComponent from "./pages/Home/index";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<HomeComponent/>}/>
        <Route exact path="/login" element={<LoginComponent/>}/>
        <Route exact path="/register" element={<RegisterComponent/>}/>
        <Route exact path="/forgotpassword" element={<ForgetPasswordComponent/>}/>
        <Route exact path="/resetpassword" element={<ResetPasswordComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
