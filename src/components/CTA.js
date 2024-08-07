import React from "react";

const CTA = ({btn_name}) => {
  return (
    <button className="font-inter w-[290px] h-[56px] bg-[#125B57] text-white font-[700] text-[16px] leading-[19.36px] text-center rounded-[40px]"
    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      {btn_name}
    </button>
  );
};

export default CTA;
