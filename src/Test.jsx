import React, { useState } from 'react'

import CloseIcon from '@mui/icons-material/Close';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';



const Discussion = () => {
    const [focusedInput, setFocusedInput] = useState(null);
  return (
    <div className="">
         <div
      className="w-[full] h-[106px] bg-[#125B57] flex justify-center items-center relative"
      style={{
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        borderBottomLeftRadius: '36px',
        borderBottomRightRadius: '36px',
        boxShadow: '0px 4px 4px 0px #00000040'
      }}
    >
      <div className="absolute left-[18.95px] ">
        <CloseIcon className="text-[#FFFFFF] cursor-pointer" />
      </div>
      <div className="">
        <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">Citizen scientis kit</p>
      </div>
    </div>
        <section className="w-[330.2px] max-h-[586px] mt-[19px] flex flex-col gap-[205px] mx-auto">
            <section className="w-full max-h-[325px] flex flex-col gap-[45px]">
                <div className="w-full max-h-[22px] flex gap-[30px]">
                    <div className="w-[236.2px] h-[22px] flex gap-[27px]">
                        {/* icon */}
                        <CloseIcon/>
                        {/* text */}
                        <p className="font-inter font-[400] text-[16px] leading-[24px] tracking-[-2.3%] text-[#125B57]">Start a new discussion</p>
                    </div>
                    <div>
                        {/* post link */}
                        <p className="font-inter font-[600] text-[16px] leading-[24px] tracking-[-2.3%] text-[#125B57]">Post</p>
                    </div>
                </div>

                <div className="w-[314px] max-h-[258px] mx-auto flex flex-col gap-[13px]">
                    {/* inputs */}
                    <input
                        type="text"
                        required
                        
                        placeholder="Enter your topic to discuss"
                        onFocus={() => setFocusedInput("topic")}
                        onBlur={() => setFocusedInput(null)}
                        className={`w-full font-inter h-[47px] placeholder-[#125B57] py-0 px-2.5 border-2 rounded-[10px] ${
                        focusedInput === "topic" ? 'border-[#125B57]' : 'border-[#125B57]'
                        } bg-[#FAFAFA] box-border outline-none  text-[#125B57] font-[400] text-[16px] leading-[24px] tracking-[-2.3%]`}
                     />

                     {/* description input */}
                        <textarea
                            required
                            placeholder="Description"
                            onFocus={() => setFocusedInput("topic")}
                            onBlur={() => setFocusedInput(null)}
                            className={`w-full font-inter h-[138px] placeholder-[#125B57] py-[10px] px-2.5 border-2 rounded-[10px] ${
                                focusedInput === "topic" ? 'border-[#125B57]' : 'border-[#125B57]'
                            } bg-[#FAFAFA] box-border outline-none text-[#125B57] font-[400] text-[16px] leading-[24px] tracking-[-2.3%] resize-none`}
                        />

                    {/* Add a photo Button */}
                    <button className="w-[111px] ml-auto flex justify-center items-center h-[47px] bg-[#125B57] gap-[8px] text-white rounded-[22px]">
                            <CameraEnhanceIcon className="!w-[25px] !h-[20px]"/>
                            <p className='font-inter font-[400] text-[12px] leading-[18px] tracking-[-2.3%] text-[#C8C8C8]'>Add Photo</p>
                    </button>

                </div>
            </section>


            {/* Post button */}
            <button className="font-inter w-[290px] h-[56px] bg-[#125B57] text-white font-[500] text-[16px] leading-[19.36px] text-center rounded-[40px]"
    style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      Post
    </button>
        </section>
    </div>
  )
}

export default Discussion