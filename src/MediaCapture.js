import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import ClearIcon from '@mui/icons-material/Clear'; // Ensure you import the icon

const CameraCaptureWithHeader = ({ title }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user');
  const [showPopup, setShowPopup] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const toggleCamera = () => {
    setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        className="h-[106px]  bg-[#125B57] z-[90] relative flex justify-center items-center"
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
          <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
        </div>
      </div>

      <div className="relative  mt-[-40px] flex items-center justify-center flex-1">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute bottom-16 flex justify-center w-full">
          <button
            onClick={capture}
            className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 flex items-center justify-center"
          >
            <span className="sr-only">Capture</span>
          </button>
        </div>
        <button
          onClick={toggleCamera}
          className="absolute top-8 right-8 w-10 h-10 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center"
        >
          🔄
        </button>
        {showPopup && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
            Picture Saved!
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraCaptureWithHeader;
