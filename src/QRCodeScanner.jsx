// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

// const QRCodeScanner = ({ onScan }) => {
//   const webcamRef = useRef(null);
//   const [currentDeviceId, setCurrentDeviceId] = useState(null);

//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     console.log('ZXing code reader initialized');

//     const scan = () => {
//       if (webcamRef.current && currentDeviceId) {
//         codeReader.decodeFromVideoDevice(currentDeviceId, webcamRef.current.video, (result, err) => {
//           if (result) {
//             console.log('QR Code detected:', result.getText());
//             onScan(result.getText());
//           }
//           if (err && !(err instanceof NotFoundException)) {
//             console.error('Error during QR code scan:', err);
//           }
//         });
//       }
//     };

//     scan();

//     return () => {
//       codeReader.reset();
//     };
//   }, [currentDeviceId, onScan]);

//   useEffect(() => {
//     const getDevices = async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter(device => device.kind === 'videoinput');

//       if (videoDevices.length > 0) {
//         // Try to find a back camera first
//         const backCamera = videoDevices.find(device =>
//           device.label.toLowerCase().includes('back')
//         );

//         setCurrentDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
//       }
//     };

//     getDevices();
//   }, []);

//   return (
//     <div className="qrContainer">
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         videoConstraints={{ deviceId: currentDeviceId }}
//         screenshotFormat="image/jpeg"
//         style={{ width: '100%' }}
//       />
//     </div>
//   );
// };

// export default QRCodeScanner;






// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

// const QRCodeScanner = ({ onScan, stopScanning }) => {
//   const webcamRef = useRef(null);
//   const [currentDeviceId, setCurrentDeviceId] = useState(null);

//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     console.log('ZXing code reader initialized');

//     const scan = () => {
//       if (webcamRef.current && currentDeviceId) {
//         codeReader.decodeFromVideoDevice(currentDeviceId, webcamRef.current.video, (result, err) => {
//           if (result) {
//             console.log('QR Code detected:', result.getText());
//             onScan(result.getText());
//             stopScanning(); // Stop scanning when a QR code is detected
//           }
//           if (err && !(err instanceof NotFoundException)) {
//             console.error('Error during QR code scan:', err);
//           }
//         });
//       }
//     };

//     scan();

//     return () => {
//       codeReader.reset();
//     };
//   }, [currentDeviceId, onScan, stopScanning]);

//   useEffect(() => {
//     const getDevices = async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter(device => device.kind === 'videoinput');

//       if (videoDevices.length > 0) {
//         const backCamera = videoDevices.find(device =>
//           device.label.toLowerCase().includes('back')
//         );

//         setCurrentDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
//       }
//     };

//     getDevices();
//   }, []);

//   return (
//     <div className="qrContainer">
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         videoConstraints={{ deviceId: currentDeviceId }}
//         screenshotFormat="image/jpeg"
//         style={{ width: '100%' }}
//       />
//     </div>
//   );
// };

// export default QRCodeScanner;


//---------------------------------------------------------------------------------------------->


import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

const QRCodeScanner = ({ onScan, isScanning }) => {
  const webcamRef = useRef(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(null);

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    console.log('ZXing code reader initialized');

    const scan = () => {
      if (webcamRef.current && currentDeviceId) {
        codeReader.decodeFromVideoDevice(currentDeviceId, webcamRef.current.video, (result, err) => {
          if (result) {
            console.log('QR Code detected:', result.getText());
            onScan(result.getText());
          }
          if (err && !(err instanceof NotFoundException)) {
            console.error('Error during QR code scan:', err);
          }
        });
      }
    };

    if (isScanning) {
      scan();
    }

    return () => {
      codeReader.reset();
    };
  }, [currentDeviceId, onScan, isScanning]);

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');

      if (videoDevices.length > 0) {
        const backCamera = videoDevices.find(device =>
          device.label.toLowerCase().includes('back')
        );

        setCurrentDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
      }
    };

    getDevices();
  }, []);

  return (
    <div className="qrContainer">
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={{ deviceId: currentDeviceId }}
        screenshotFormat="image/jpeg"
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default QRCodeScanner;

































// import React, { useRef, useEffect, useState } from 'react';
// import Webcam from 'react-webcam';
// import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

// const QRCodeScanner = ({ onScan }) => {
//   const webcamRef = useRef(null);
//   const [currentDeviceId, setCurrentDeviceId] = useState(null);
//   const [devices, setDevices] = useState([]);

//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     console.log('ZXing code reader initialized');

//     const scan = () => {
//       if (webcamRef.current && currentDeviceId) {
//         codeReader.decodeFromVideoDevice(currentDeviceId, webcamRef.current.video, (result, err) => {
//           if (result) {
//             console.log('QR Code detected:', result.getText());
//             onScan(result.getText());
//           }
//           if (err && !(err instanceof NotFoundException)) {
//             console.error('Error during QR code scan:', err);
//           }
//         });
//       }
//     };

//     scan();

//     return () => {
//       codeReader.reset();
//     };
//   }, [currentDeviceId, onScan]);

//   useEffect(() => {
//     const getDevices = async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter(device => device.kind === 'videoinput');
//       setDevices(videoDevices);

//       if (videoDevices.length > 0) {
//         // Try to find a back camera first
//         const backCamera = videoDevices.find(device =>
//           device.label.toLowerCase().includes('back')
//         );

//         setCurrentDeviceId(backCamera ? backCamera.deviceId : videoDevices[0].deviceId);
//       }
//     };

//     getDevices();
//   }, []);

//   const handleSwitchCamera = () => {
//     const currentIndex = devices.findIndex(device => device.deviceId === currentDeviceId);
//     const nextIndex = (currentIndex + 1) % devices.length;
//     setCurrentDeviceId(devices[nextIndex].deviceId);
//   };

//   return (
//     <div className="qrContainer">
//       <Webcam
//         audio={false}
//         ref={webcamRef}
//         videoConstraints={{ deviceId: currentDeviceId }}
//         screenshotFormat="image/jpeg"
//         style={{ width: '100%' }}
//       />
//       <button onClick={handleSwitchCamera}>
//         Switch Camera
//       </button>
//     </div>
//   );
// };

// export default QRCodeScanner;
