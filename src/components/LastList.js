import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const LastList = ({title,Icon}) => {
  return (
    <div>
     <div
        className={`w-[314px] h-[57px] border-0 border-b border-b-white p-[16px] flex justify-start items-center gap-[24px] bg-[#125B57] rounded-b-lg`}
      >
        <span className='text-white'>
        {Icon && <Icon className='w-[17.5px] h-[25px]'/>}
        </span>
        <p className='font-inter font-[400] text-[12px] leading-[14.52px] text-white'>{title}</p>
      </div>
        </div>
    
  )
}

export default LastList