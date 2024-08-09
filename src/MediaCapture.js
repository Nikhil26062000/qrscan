import React, { useRef } from 'react';
import Webcam from 'react-webcam';

const MediaCapture = () => {
  const webcamRef = useRef(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  };

  return (
    <div className="flex flex-col w-[80%] mx-auto items-center justify-center h-screen">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-full h-auto"
      />
      <button
        onClick={capture}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Capture Photo
      </button>
    </div>
  );
};

export default MediaCapture;
