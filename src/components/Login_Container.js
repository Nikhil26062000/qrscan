import React from "react";

import LogForm from "./LogForm";
import Signup_Login_Header from "./Signup_Login_Header";


const Login_Container = () => {
  return (
    <div className="absolute w-[319px] top-[158px]">
      <Signup_Login_Header heading="Log in" paragraph="Hello, welcome back!" />
      <LogForm/>
    </div>
  );
};

export default Login_Container;
