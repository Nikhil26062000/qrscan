import React from "react";


const Toggle_login_signup = ({ notify, redirect_To, redirect_path }) => {
  

  return (
    <div>
      <section className="">
        <p className=" font-inter text-[18px]leading-[21.78px] font-[400]  text-center">
          {notify}

       
            <span className="cursor-pointer font-[700] font-inter leading-[21.78px] text-[18px] text-center">
              {redirect_To}
            </span>
        
        </p>
      </section>
    </div>
  );
};

export default Toggle_login_signup;
