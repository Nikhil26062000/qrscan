import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.js';
import Login from './Login.js';
import Address from './Address.js';
import Turn_Off from './Turn_Off.js';
import Turn_On from './Turn_On.js';
import Language from './Language.js';
import Password from './Password.js';
import Default_Address from './Default_Address.js';
import Account from './Account.js';
import Dashboard from './Dashboard.js';
import CitizenScientistKit from './CitizenScientistKit.js';
import Discussion from './Discussion.jsx';
import Signup from './Signup.js';
import Password from './Password.js'


function MainApp() {
  return (
    <Router>
      <Routes>
        
        <Route path="/qrscan" element={<Signup />} />
        <Route path="/qrcode" element={<App />} />

        <Route path="/login" element={<Login />} />
       
        <Route path="/address" element={<Address />} />
        <Route path="/notificationOn" element={<Turn_Off />} />
        <Route path="/notificationOff" element={<Turn_On />} />
        <Route path="/language" element={<Language />} />
        <Route path="/password" element={<Password />} />
        <Route path="/managePassword" element={<Password/>} />
        <Route path="/defaultAddress" element={<Default_Address/>} />
        <Route path="/account" element={<Account/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/kit" element={<CitizenScientistKit/>} />
        <Route path="/discussion" element={<Discussion/>} />
        
      </Routes>
    </Router>
  );
}

export default MainApp;
