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
    <div className="flex flex-col justify-between h-screen p-4 relative">
      <div className="flex-1 flex items-center justify-center">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={{ facingMode }}
          className="w-full max-w-sm h-auto border-2 border-gray-300 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={toggleCamera}
          className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600"
        >
          Switch Camera
        </button>
        <button
          onClick={capture}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
        >
          Capture Photo
        </button>
      </div>
      {showPopup && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
          Picture Saved!
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
