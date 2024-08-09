import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';

const CameraCapture = () => {
  const webcamRef = useRef(null);
  const [facingMode, setFacingMode] = useState('user'); // 'user' for front camera, 'environment' for back camera
  const [showPopup, setShowPopup] = useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Hide popup after 2 seconds
  };

  const toggleCamera = () => {
    setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen">
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
  );
};

export default CameraCapture;
