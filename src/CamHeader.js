import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'; // Ensure you import the icon

const CamHeader = () => {
  return (
    <div
    className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
    style={{
      borderTopLeftRadius: '0px',
      borderTopRightRadius: '0px',
      borderBottomLeftRadius: '36px',
      borderBottomRightRadius: '36px',
      boxShadow: '0px 4px 4px 0px #00000040' 
    }}
  >
    <div className="absolute left-[18.95px]">
      <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
    </div>
    <div className="absolute">
      <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">Camera</p>
    </div>
  </div>
  )
}

export default CamHeader