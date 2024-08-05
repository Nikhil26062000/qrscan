import React from "react";
import ClearIcon from '@mui/icons-material/Clear';


const Top_Header = ({title}) => {
  return (
    <div
      className="h-[106px] bg-[#125B57] relative"
      style={{
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        boxShadow: '0px 4px 4px 0px #00000040' 
      }}
    >
      <div className="absolute top-[40.34px] left-[18.95px]">{/* icon */}
        <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
      </div>
      <div className="absolute top-[40.34px] left-[134px]">{/* title */}
        <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
      </div>
    </div>
  );
};

export default Top_Header;
