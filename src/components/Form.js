import React,{useState} from 'react'
import CTA from './CTA';




const Form = () => {
    const [focusedInput, setFocusedInput] = useState(null);
    return (
      <div className="w-[290px]  mx-auto flex flex-col gap-[18px]  ">
        <section className=" w-full">
          <form className="flex flex-col gap-[18px] ">
            <div
              className={`w-[290px] h-[56px] ${
                focusedInput === "email" ? "border-none" : "border-2 border-black"
              } bg-white`}
            >
              <input
                type="email"
                placeholder="Email"
                required
                onFocus={() => setFocusedInput("email")}
                onBlur={() => setFocusedInput(null)}
                className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78]  p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                  focusedInput === "email"
                    ? "border-2 border-black"
                    : "border-none"
                } bg-white`}
                style={{ boxSizing: "border-box" }}
              />
            </div>
  
            <div
              className={`w-[290px] h-[56px] ${
                focusedInput === "username"
                  ? "border-none"
                  : "border-2 border-black"
              } bg-white`}
            >
              <input
                type="text"
                placeholder="Username"
                required
                onFocus={() => setFocusedInput("username")}
                onBlur={() => setFocusedInput(null)}
                className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                  focusedInput === "username"
                    ? "border-2 border-black"
                    : "border-none"
                } bg-white`}
                style={{ boxSizing: "border-box" }}
              />
            </div>
  
            <div
              className={`w-[290px] h-[56px] ${
                focusedInput === "password"
                  ? "border-none"
                  : "border-2 border-black"
              } bg-white`}
            >
              <input
                type="password"
                placeholder="Password"
                required
                onFocus={() => setFocusedInput("password")}
                onBlur={() => setFocusedInput(null)}
                className={`placeholder-custom w-full h-full font-inter font-[300] text-[18px] leading-[21.78] p-[calc(16px-2px)] pr-[calc(23px-2px)] pl-[calc(23px-2px)] ${
                  focusedInput === "password"
                    ? "border-2 border-black"
                    : "border-none"
                } bg-white`}
              
                style={{ boxSizing: "border-box" }}
              />
            </div>
  
          <CTA btn_name="Create account"/>
          {/* <Google_singup_CTA btn_name="Continue with Google"/> */}
          </form>
        </section>
  
       {/* <Toggle_login_signup notify="Already have an account ?" redirect_To=" Log in" redirect_path="/login"/> */}
      </div>
    );
  };
  
  export default Form;