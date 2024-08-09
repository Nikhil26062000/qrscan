import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import ClearIcon from '@mui/icons-material/Clear';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

const CameraCaptureWithHeader = ({ title }) => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user');
  const [popupMessage, setPopupMessage] = useState('');

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    
    // Set the popup message based on the current facing mode
    const message = facingMode === 'user' ? 'Picture captured from the front camera!' : 'Picture captured from the back camera!';
    setPopupMessage(message);

    // Clear the message after 2 seconds
    setTimeout(() => setPopupMessage(''), 2000);
  };

  const toggleCamera = () => {
    setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
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

      {/* Camera and Controls */}
      <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
        {/* Webcam */}
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* Dummy Options (Photo, Video, Audio) */}
        <div className="flex space-x-6 mb-4 z-[1000]">
          <button className="text-white font-semibold">Video</button>
          <button className="text-white font-semibold">Photo</button>
          <button className="text-white font-semibold">Audio</button>
        </div>

        {/* Capture and Camera Switch Buttons */}
        <div className="flex space-x-6 mb-8 pb-[30px] z-[1000]">
          <button className="w-14 h-14 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center">
            <PhotoSizeSelectActualIcon />
          </button>
          <button
            onClick={capture}
            className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
          >
            <span className="sr-only">Capture</span>
          </button>
          <button
            onClick={toggleCamera}
            className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
            <CameraswitchIcon />
          </button>
        </div>

        {/* Popup Notification */}
        {popupMessage && (
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
            {popupMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraCaptureWithHeader;
