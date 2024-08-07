import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Discussion'
import reportWebVitals from './reportWebVitals';

import MainApp from './MainApp';
import Signup from './Signup';

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
  {/* <Turn_On/> */}
  <Signup/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
