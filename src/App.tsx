import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, } from 'react-router-dom';
import logo from './logo.svg';
import Home from "./components/Home"
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Login from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPasssword';
import NewPasword from './components/NewPassword';
import { Verify } from 'crypto';
import VerifyEmail from './components/VerifyEmail';
import SingleCampaign from './components/SingleCampaign';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notifications from './components/Notifications';

function App() {
  return (
    <>
     <Router>
     <ToastContainer />
     <Routes>
   

        <Route path='/' element={<Home />} />
        <Route path='/SingleCampaign' element={<SingleCampaign />} />
        <Route path='/Notifications' element={<Notifications />} />
        <Route path='/NewPassword' element={<NewPasword />} />
        <Route path='/VerifyEmail' element={<VerifyEmail />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/ResetPassword' element={<ResetPassword />} />
          <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        
 
        </Routes>
    </Router>
    
    </>
 
  );
}

export default App;
