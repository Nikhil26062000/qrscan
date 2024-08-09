// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import { useNavigate } from 'react-router-dom';

// const MediaCapture = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [popupMessage, setPopupMessage] = useState('');
//   const navigate = useNavigate()

//   const capture = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc);
    
//     // Set the popup message based on the current facing mode
//     const message = facingMode === 'user' ? 'Picture captured from the front camera!' : 'Picture captured from the back camera!';
//     setPopupMessage(message);

//     // Clear the message after 2 seconds
//     setTimeout(() => setPopupMessage(''), 2000);
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   const handleVideo = () => {
//     navigate("/qrscan/video")
//   }

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040' 
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">Camera Feature</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000] ">
//           <button className="text-white font-inter font-[500] text-[16px] leading-[19.36px]" onClick={handleVideo}>VIDEO</button>
//           <button className="text-white font-inter font-[500] text-[16px] leading-[19.36px]">PHOTO</button>
//           <button className="text-white font-inter font-[500] text-[16px] leading-[19.36px]">AUDIO</button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[50px] z-[1000]">
//           <button className="w-14 h-14 text-white rounded-full shadow-lg hover:bg-green-600 flex items-center justify-center">
//             <PhotoSizeSelectActualIcon className='w-[32px] h-[20px]' />
//           </button>
//           <button
//             onClick={capture}
//             className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
//           >
//             <span className="sr-only">Capture</span>
//           </button>
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon  className='w-[32px] h-[32px]'/>
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MediaCapture;



// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

// const CameraCaptureWithHeader = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoMode, setVideoMode] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const mediaRecorderRef = useRef(null);
//   const [capturedVideo, setCapturedVideo] = useState(null);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc);

//     const message = facingMode === 'user' ? 'Picture captured from the front camera!' : 'Picture captured from the back camera!';
//     setPopupMessage(message);

//     setTimeout(() => setPopupMessage(''), 2000);
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     const stream = webcamRef.current.video.srcObject;
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm'
//     });
//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const videoURL = URL.createObjectURL(event.data);
//       setCapturedVideo(videoURL);
//       console.log("Video captured:", videoURL);

//       const message = facingMode === 'user' ? 'Video captured from the front camera!' : 'Video captured from the back camera!';
//       setPopupMessage(message);
//     }
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040' 
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={true}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000]">
//           <button
//             onClick={() => setVideoMode(false)}
//             className={`text-white font-semibold ${!videoMode && 'underline'}`}
//           >
//             Photo
//           </button>
//           <button
//             onClick={() => setVideoMode(true)}
//             className={`text-white font-semibold ${videoMode && 'underline'}`}
//           >
//             Video
//           </button>
//           <button className="text-white font-semibold">Audio</button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[30px] z-[1000]">
//           {videoMode ? (
//             <button
//               onClick={isRecording ? stopRecording : startRecording}
//               className="w-16 h-16 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">{isRecording ? 'Stop Recording' : 'Start Recording'}</span>
//             </button>
//           ) : (
//             <button
//               onClick={capturePhoto}
//               className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">Capture</span>
//             </button>
//           )}
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon />
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}

//         {/* Display captured video */}
//         {capturedVideo && (
//           <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             <video src={capturedVideo} controls />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraCaptureWithHeader;


// import React, { useState, useRef, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

// const CameraCaptureWithHeader = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoMode, setVideoMode] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const mediaRecorderRef = useRef(null);
//   const [capturedVideo, setCapturedVideo] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [showVideoPopup, setShowVideoPopup] = useState(false);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     console.log(imageSrc);

//     const message = facingMode === 'user' ? 'Picture captured from the front camera!' : 'Picture captured from the back camera!';
//     setPopupMessage(message);

//     setTimeout(() => setPopupMessage(''), 2000);
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     setTimer(0);
//     const stream = webcamRef.current.video.srcObject;
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm'
//     });
//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();

//     // Start timer
//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);

//     // Stop timer when recording stops
//     mediaRecorderRef.current.addEventListener('stop', () => {
//       clearInterval(intervalId);
//     });
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const videoURL = URL.createObjectURL(event.data);
//       setCapturedVideo(videoURL);
//       console.log("Video captured:", videoURL);

//       const message = facingMode === 'user' ? 'Video captured from the front camera!' : 'Video captured from the back camera!';
//       setPopupMessage(message);

//       setShowVideoPopup(true);
//     }
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   const closePopup = () => {
//     setShowVideoPopup(false);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040' 
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={true}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000]">
//           <button
//             onClick={() => setVideoMode(false)}
//             className={`text-white font-semibold ${!videoMode && 'underline'}`}
//           >
//             Photo
//           </button>
//           <button
//             onClick={() => setVideoMode(true)}
//             className={`text-white font-semibold ${videoMode && 'underline'}`}
//           >
//             Video
//           </button>
//           <button className="text-white font-semibold">Audio</button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[50px] z-[1000]">
//           {videoMode ? (
//             <button
//               onClick={isRecording ? stopRecording : startRecording}
//               className="w-16 h-16 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center relative"
//             >
//               {isRecording && (
//                 <>
//                   <div className="absolute top-[-40px] text-white text-sm">
//                     <span>Recording...</span>
//                     <span className="ml-2">{formatTime(timer)}</span>
//                   </div>
//                   <span className="sr-only">Stop Recording</span>
//                 </>
//               )}
//             </button>
//           ) : (
//             <button
//               onClick={capturePhoto}
//               className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">Capture</span>
//             </button>
//           )}
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon />
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && !showVideoPopup && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}

//         {/* Video Popup */}
//         {showVideoPopup && (
//           <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-[10000]">
//             <video src={capturedVideo} controls className="w-full max-w-md mb-4" />
//             <button
//               onClick={closePopup}
//               className="px-4 py-2 bg-white text-black rounded-lg shadow-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraCaptureWithHeader;




// import React, { useState, useRef, useEffect } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

// const CameraCaptureWithHeader = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoMode, setVideoMode] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const mediaRecorderRef = useRef(null);
//   const [capturedVideo, setCapturedVideo] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setCapturedVideo(null);
//     console.log("Image captured:", imageSrc);

//     const message = facingMode === 'user' ? 'Image captured from the front camera!' : 'Image captured from the back camera!';
//     setPopupMessage(message);

//     setShowPopup(true);
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     setTimer(0);
//     const stream = webcamRef.current.video.srcObject;
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm'
//     });
//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();

//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);

//     mediaRecorderRef.current.addEventListener('stop', () => {
//       clearInterval(intervalId);
//     });
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const videoURL = URL.createObjectURL(event.data);
//       setCapturedVideo(videoURL);
//       setCapturedImage(null);
//       console.log("Video captured:", videoURL);

//       const message = facingMode === 'user' ? 'Video captured from the front camera!' : 'Video captured from the back camera!';
//       setPopupMessage(message);

//       setShowPopup(true);
//     }
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040' 
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={false}
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000]">
//           <button
//             onClick={() => setVideoMode(false)}
//             className={`text-white font-semibold ${!videoMode && 'underline'}`}
//           >
//             Photo
//           </button>
//           <button
//             onClick={() => setVideoMode(true)}
//             className={`text-white font-semibold ${videoMode && 'underline'}`}
//           >
//             Video
//           </button>
//           <button className="text-white font-semibold">Audio</button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[30px] z-[1000]">
//           {videoMode ? (
//             <button
//               onClick={isRecording ? stopRecording : startRecording}
//               className="w-16 h-16 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center relative"
//             >
//               {isRecording && (
//                 <>
//                   <div className="absolute inset-0 flex justify-center items-center text-white text-lg">
//                     <span className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{formatTime(timer)}</span>
//                   </div>
//                   <span className="sr-only">Stop Recording</span>
//                 </>
//               )}
//             </button>
//           ) : (
//             <button
//               onClick={capturePhoto}
//               className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">Capture</span>
//             </button>
//           )}
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon />
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && !showPopup && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}

//         {/* Image/Video Popup */}
//         {showPopup && (
//           <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-[10000]">
//             {capturedImage && <img src={capturedImage} alt="Captured" className="w-full max-w-md mb-4" />}
//             {capturedVideo && <video src={capturedVideo} controls className="w-full max-w-md mb-4" />}
//             <button
//               onClick={closePopup}
//               className="px-4 py-2 bg-white text-black rounded-lg shadow-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraCaptureWithHeader;





// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';

// const CameraCaptureWithHeader = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoMode, setVideoMode] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const mediaRecorderRef = useRef(null);
//   const [capturedVideo, setCapturedVideo] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setCapturedVideo(null);
//     console.log("Image captured:", imageSrc);

//     const message = facingMode === 'user' ? 'Image captured from the front camera!' : 'Image captured from the back camera!';
//     setPopupMessage(message);

//     setShowPopup(true);
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     setTimer(0);

//     const stream = webcamRef.current.stream; // This includes both video and audio tracks
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm'
//     });

//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();

//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);

//     mediaRecorderRef.current.addEventListener('stop', () => {
//       clearInterval(intervalId);
//     });
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const videoURL = URL.createObjectURL(event.data);
//       setCapturedVideo(videoURL);
//       setCapturedImage(null);
//       console.log("Video captured:", videoURL);

//       const message = facingMode === 'user' ? 'Video captured from the front camera!' : 'Video captured from the back camera!';
//       setPopupMessage(message);

//       setShowPopup(true);
//     }
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040' 
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={true} // Ensure audio is enabled
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000]">
//           <button
//             onClick={() => setVideoMode(false)}
//             className={`text-white font-semibold ${!videoMode && 'underline'}`}
//           >
//             Photo
//           </button>
//           <button
//             onClick={() => setVideoMode(true)}
//             className={`text-white font-semibold ${videoMode && 'underline'}`}
//           >
//             Video
//           </button>
//           <button className="text-white font-semibold">Audio</button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[30px] z-[1000]">
//           {videoMode ? (
//             <button
//               onClick={isRecording ? stopRecording : startRecording}
//               className="w-16 h-16 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center relative"
//             >
//               {isRecording && (
//                 <>
//                   <div className="absolute inset-0 flex justify-center items-center text-white text-lg">
//                     <span className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{formatTime(timer)}</span>
//                   </div>
//                   <span className="sr-only">Stop Recording</span>
//                 </>
//               )}
//             </button>
//           ) : (
//             <button
//               onClick={capturePhoto}
//               className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">Capture</span>
//             </button>
//           )}
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon />
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && !showPopup && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}

//         {/* Image/Video Popup */}
//         {showPopup && (
//           <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-[10000]">
//             {capturedImage && <img src={capturedImage} alt="Captured" className="w-full max-w-md mb-4" />}
//             {capturedVideo && <video src={capturedVideo} controls className="w-full max-w-md mb-4" />}
//             <button
//               onClick={closePopup}
//               className="px-4 py-2 bg-white text-black rounded-lg shadow-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraCaptureWithHeader;


//! Important


// import React, { useState, useRef } from 'react';
// import Webcam from 'react-webcam';
// import ClearIcon from '@mui/icons-material/Clear';
// import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
// import MicIcon from '@mui/icons-material/Mic';

// const CameraCaptureWithHeader = ({ title }) => {
//   const webcamRef = useRef(null);
//   const [facingMode, setFacingMode] = useState('user');
//   const [isRecording, setIsRecording] = useState(false);
//   const [videoMode, setVideoMode] = useState(false);
//   const [audioMode, setAudioMode] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');
//   const mediaRecorderRef = useRef(null);
//   const [capturedVideo, setCapturedVideo] = useState(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [capturedAudio, setCapturedAudio] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [showPopup, setShowPopup] = useState(false);

//   const capturePhoto = () => {
//     const imageSrc = webcamRef.current.getScreenshot();
//     setCapturedImage(imageSrc);
//     setCapturedVideo(null);
//     setCapturedAudio(null);
//     console.log("Image captured:", imageSrc);

//     const message = facingMode === 'user' ? 'Image captured from the front camera!' : 'Image captured from the back camera!';
//     setPopupMessage(message);

//     setShowPopup(true);
//   };

//   const startRecording = () => {
//     setIsRecording(true);
//     setTimer(0);

//     const stream = webcamRef.current.stream;
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm'
//     });

//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();

//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);

//     mediaRecorderRef.current.addEventListener('stop', () => {
//       clearInterval(intervalId);
//     });
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     mediaRecorderRef.current.stop();
//   };

//   const startAudioRecording = async () => {
//     setAudioMode(true);
//     setIsRecording(true);
//     setTimer(0);

//     const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'audio/webm'
//     });

//     mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
//     mediaRecorderRef.current.start();

//     const intervalId = setInterval(() => {
//       setTimer(prevTimer => prevTimer + 1);
//     }, 1000);

//     mediaRecorderRef.current.addEventListener('stop', () => {
//       clearInterval(intervalId);
//       setIsRecording(false);
//     });
//   };

//   const stopAudioRecording = () => {
//     setAudioMode(false);
//     mediaRecorderRef.current.stop();
//   };

//   const handleDataAvailable = (event) => {
//     if (event.data.size > 0) {
//       const type = mediaRecorderRef.current.mimeType.includes('video') ? 'video' : 'audio';
//       const url = URL.createObjectURL(event.data);

//       if (type === 'video') {
//         setCapturedVideo(url);
//         setCapturedImage(null);
//         setCapturedAudio(null);
//       } else {
//         setCapturedAudio(url);
//         setCapturedImage(null);
//         setCapturedVideo(null);
//       }

//       const message = facingMode === 'user' ? `${type.charAt(0).toUpperCase() + type.slice(1)} captured from the front camera!` : `${type.charAt(0).toUpperCase() + type.slice(1)} captured from the back camera!`;
//       setPopupMessage(message);

//       setShowPopup(true);
//     }
//   };

//   const toggleCamera = () => {
//     setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//   };

//   const closePopup = () => {
//     setShowPopup(false);
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Header */}
//       <div
//         className="h-[106px] bg-[#125B57] z-[90] relative flex justify-center items-center"
//         style={{
//           borderTopLeftRadius: '0px',
//           borderTopRightRadius: '0px',
//           borderBottomLeftRadius: '36px',
//           borderBottomRightRadius: '36px',
//           boxShadow: '0px 4px 4px 0px #00000040'
//         }}
//       >
//         <div className="absolute left-[18.95px]">
//           <ClearIcon className="text-[#FFFFFF] cursor-pointer" />
//         </div>
//         <div className="absolute">
//           <p className="font-inter font-[500] text-[16px] leading-[19.36px] text-[#FFFFFF]">{title}</p>
//         </div>
//       </div>

//       {/* Camera and Controls */}
//       <div className="relative mt-[-40px] flex flex-col items-center justify-end flex-1">
//         {/* Webcam */}
//         <Webcam
//           audio={videoMode || audioMode} // Ensure audio is enabled only in video and audio modes
//           ref={webcamRef}
//           screenshotFormat="image/jpeg"
//           videoConstraints={{ facingMode }}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//         />

//         {/* Dummy Options (Photo, Video, Audio) */}
//         <div className="flex space-x-6 mb-4 z-[1000]">
//           <button
//             onClick={() => { setVideoMode(false); setAudioMode(false); }}
//             className={`text-white font-semibold ${!videoMode && !audioMode && 'underline'}`}
//           >
//             Photo
//           </button>
//           <button
//             onClick={() => { setVideoMode(true); setAudioMode(false); }}
//             className={`text-white font-semibold ${videoMode && !audioMode && 'underline'}`}
//           >
//             Video
//           </button>
//           <button
//             onClick={() => { setAudioMode(true); setVideoMode(false); }}
//             className={`text-white font-semibold ${audioMode && !videoMode && 'underline'}`}
//           >
//             Audio
//           </button>
//         </div>

//         {/* Capture and Camera Switch Buttons */}
//         <div className="flex space-x-6 mb-8 pb-[30px] z-[1000]">
//           {videoMode && !audioMode ? (
//             <button
//               onClick={isRecording ? stopRecording : startRecording}
//               className="w-16 h-16 bg-red-500 text-white rounded-full shadow-lg flex items-center justify-center relative"
//             >
//               {isRecording && (
//                 <>
//                   <div className="absolute inset-0 flex justify-center items-center text-white text-lg">
//                     <span className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{formatTime(timer)}</span>
//                   </div>
//                   <span className="sr-only">Stop Recording</span>
//                 </>
//               )}
//             </button>
//           ) : audioMode ? (
//             <button
//               onClick={isRecording ? stopAudioRecording : startAudioRecording}
//               className="w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg flex items-center justify-center relative"
//             >
//               {isRecording && (
//                 <>
//                   <div className="absolute inset-0 flex justify-center items-center text-white text-lg">
//                     <span className="bg-black bg-opacity-50 px-4 py-2 rounded-lg">{formatTime(timer)}</span>
//                   </div>
//                   <span className="sr-only">Stop Recording</span>
//                 </>
//               )}
//               <MicIcon />
//             </button>
//           ) : (
//             <button
//               onClick={capturePhoto}
//               className="w-16 h-16 bg-white text-blue-500 rounded-full shadow-lg flex items-center justify-center"
//             >
//               <span className="sr-only">Capture</span>
//             </button>
//           )}
//           <button
//             onClick={toggleCamera}
//             className="w-14 h-14 text-white rounded-full shadow-lg flex items-center justify-center">
//             <CameraswitchIcon />
//           </button>
//         </div>

//         {/* Popup Notification */}
//         {popupMessage && !showPopup && (
//           <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg shadow-lg">
//             {popupMessage}
//           </div>
//         )}

//         {/* Image/Video/Audio Popup */}
//         {showPopup && (
//           <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-[10000]">
//             {capturedImage && <img src={capturedImage} alt="Captured" className="w-full max-w-md mb-4" />}
//             {capturedVideo && <video src={capturedVideo} controls className="w-full max-w-md mb-4" />}
//             {capturedAudio && (
//               <audio src={capturedAudio} controls className="w-full max-w-md mb-4" />
//             )}
//             <button
//               onClick={closePopup}
//               className="px-4 py-2 bg-white text-black rounded-lg shadow-lg"
//             >
//               Close
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CameraCaptureWithHeader;




// import React, { useRef, useState } from 'react';

// const VideoRecorder = () => {
//   const videoRef = useRef(null);
//   const mediaRecorderRef = useRef(null);
//   const [isRecording, setIsRecording] = useState(false);
//   const [recordedChunks, setRecordedChunks] = useState([]);
//   const [facingMode, setFacingMode] = useState('user'); // 'user' for front, 'environment' for back

//   const startRecording = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({
//       video: { facingMode: facingMode },
//       audio: true,
//     });

//     videoRef.current.srcObject = stream;
//     videoRef.current.play();

//     mediaRecorderRef.current = new MediaRecorder(stream, {
//       mimeType: 'video/webm',
//     });

//     mediaRecorderRef.current.ondataavailable = (event) => {
//       if (event.data.size > 0) {
//         setRecordedChunks((prev) => [...prev, event.data]);
//       }
//     };

//     mediaRecorderRef.current.start();
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     mediaRecorderRef.current.stop();
//     setIsRecording(false);
//   };

//   const handleSave = () => {
//     const blob = new Blob(recordedChunks, {
//       type: 'video/webm',
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     document.body.appendChild(a);
//     a.style = 'display: none';
//     a.href = url;
//     a.download = 'recorded-video.webm';
//     a.click();
//     window.URL.revokeObjectURL(url);
//     setRecordedChunks([]);
//   };

//   const toggleCamera = () => {
//     setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
//     if (isRecording) {
//       stopRecording();
//     }
//     startRecording();
//   };

//   return (
//     <div>
//       <video ref={videoRef} autoPlay muted></video>
//       <div>
//         <button onClick={toggleCamera}>
//           Switch to {facingMode === 'user' ? 'Back' : 'Front'} Camera
//         </button>
//         <button onClick={isRecording ? stopRecording : startRecording}>
//           {isRecording ? 'Stop' : 'Start'} Recording
//         </button>
//         {recordedChunks.length > 0 && (
//           <button onClick={handleSave}>Save Video</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoRecorder;









import React, { useRef, useState } from 'react';

const VideoRecorder = () => {
  const videoRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [facingMode, setFacingMode] = useState('user'); // 'user' for front, 'environment' for back
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: facingMode },
      audio: true,
    });

    videoRef.current.srcObject = stream;
    videoRef.current.play();

    mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: 'video/webm',
    });

    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
    setShowModal(true); // Show modal after stopping the recording
  };

  const handleSave = () => {
    const blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    const url = URL.createObjectURL(blob);
    setVideoUrl(url); // Set video URL for the modal
  };

  const downloadVideo = () => {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = videoUrl;
    a.download = 'recorded-video.webm';
    a.click();
    window.URL.revokeObjectURL(videoUrl);
    setRecordedChunks([]);
    setVideoUrl('');
    setShowModal(false);
  };

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
    if (isRecording) {
      stopRecording();
    }
    startRecording();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-lg">
        <video ref={videoRef} autoPlay muted className="w-full h-auto rounded-md mb-4 border"></video>
        <div className="flex justify-around mb-4">
          <button 
            onClick={toggleCamera} 
            className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Switch to {facingMode === 'user' ? 'Back' : 'Front'} Camera
          </button>
          <button 
            onClick={isRecording ? stopRecording : startRecording} 
            className={`px-4 py-2 rounded-lg text-white focus:outline-none focus:ring-2 ${isRecording ? 'bg-red-500 hover:bg-red-600 focus:ring-red-400' : 'bg-green-500 hover:bg-green-600 focus:ring-green-400'}`}
          >
            {isRecording ? 'Stop' : 'Start'} Recording
          </button>
          {recordedChunks.length > 0 && (
            <button 
              onClick={handleSave} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Preview Video
            </button>
          )}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md text-center">
            <h2 className="text-xl font-semibold mb-4">Recorded Video</h2>
            <video controls src={videoUrl} className="w-full max-h-64 mb-4 rounded-md shadow"></video>
            <div className="flex justify-around">
              <button 
                onClick={downloadVideo} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Download Video
              </button>
              <button 
                onClick={() => setShowModal(false)} 
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoRecorder;
