import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Address from './Address';
import Turn_Off from './Turn_Off';
import Turn_On from './Turn_On';
import Language from './Language';
import Password from './Password';
import Default_Address from './Default_Address';
import Account from './Account';
import Dashboard from './Dashboard';

import CitizenScientistKit from './CitizenScientistKit';
import Discussion from './Discussion';
import App from './App';
import HomePage from './HomePage';
import MediaCapture from './MediaCapture'
// import VideoRecording from './VideoRecording';




function MainApp() {
  return (
    <Router>
      <Routes>
       
        <Route path="/qrscan/" element={<HomePage />} />
        <Route path="/qrscan/signup" element={<Signup />} />
        <Route path="/qrscan/login" element={<Login />} />
        <Route path="/qrscan/qrcode" element={<App />} />
        <Route path="/qrscan/address" element={<Address />} />
        <Route path="/qrscan/notificationOn" element={<Turn_Off />} />
        <Route path="/qrscan/notificationOff" element={<Turn_On />} />
        <Route path="/qrscan/language" element={<Language />} />
        <Route path="/qrscan/managePassword" element={<Password/>} />
        <Route path="/qrscan/defaultAddress" element={<Default_Address/>} />
        <Route path="/qrscan/account" element={<Account/>} />
        <Route path="/qrscan/dashboard" element={<Dashboard/>} />
        <Route path="/qrscan/kit" element={<CitizenScientistKit/>} />
        <Route path="/qrscan/discussion" element={<Discussion/>} />
        <Route path="/qrscan/webcam" element={<MediaCapture/>} />
       
        
      </Routes>
    </Router>
  );
}

export default MainApp;
