import React, { useState } from "react";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Top_Header from "./components/Top_Header";

const Default_Address = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [address, setAddress] = useState(
    `67, 7th main, 42nd cross,Tech park, NYC-879`
  );

  return (
    <div className="w-[480px] mx-auto">
      <Top_Header title="My Address" />

      <section className=" w-[318px] h-[569px] mx-auto mt-[28px] flex flex-col gap-[328px]">
        <section className="w-[318px] h-[185px] flex flex-col gap-[18px] ">
          <p className="font-[600] text-[24px] leading-[26.4px] text-[#125B57]">
            Your Address
          </p>
          <p className="font-inter font-[500] text-[16px] leading-[16px] text-[#125B57]">
            Default Address<span className="text-red-500 pl-[2px]">*</span>
          </p>

          <div className={`w-[318px] border-2 border-[#125B57] p-[12px] `}>
            <p className="text-[16px] leading-[16px] tracking-[-2%] font-[700] text-[#125B57] py-2">
              Nikhil raj
            </p>
            <textarea
              required
              id="address"
              name="address"
              onFocus={() => setFocusedInput("address")}
              onBlur={() => setFocusedInput(null)}
              className={`w-full`}
              style={{
                boxSizing: "border-box",
                outline: focusedInput === "address" ? "none" : "",

                borderRadius: "2px",
                background: "white",
                color: "#125B57",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "17.6px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                whiteSpace: "pre-wrap",
                resize: "none",
                height: "99px",
              }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </section>

        <section className=" flex justify-center items-center">
          <button
            className="font-inter  h-[56px] bg-[#125B57] text-white font-[500] text-[16px] leading-[19.36px] text-center rounded-[40px] pt-[10px] pr-[30px] pb-[10px] pl-[30px]"
           
          >
            Add a new Address
            <span className="pl-[10px]"><ArrowForwardIcon className="!text-[16px]"/></span>
            
          </button>
              
        </section>
      </section>
    </div>
  );
};

export default Default_Address;
