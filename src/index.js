import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import reportWebVitals from './reportWebVitals';
import CitizenScientistKit from './CitizenScientistKit';
import Dashboard from './Dashboard';
import Default_Address from './Default_Address';
import Account from './Account';
import Turn_Off from './Turn_Off';
import Password from './Password';
import Language from './Language';
import Turn_On from './Turn_On';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Test/> */}
  {/* <CitizenScientistKit/> */}
  {/* <Dashboard/> */}
  {/* <Default_Address/> */}
  {/* <Account/> */}
  {/* <Turn_Off/> */}
  {/* <Password/> */}
  {/* <Language/> */}
  <Turn_On/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
