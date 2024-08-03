// import React, { useRef, useEffect, useState } from "react";
// import Webcam from "react-webcam";
// import { BrowserMultiFormatReader, NotFoundException } from "@zxing/library";

// const QRCodeScanner = ({ onScan, isScanning }) => {
//   const webcamRef = useRef(null);
//   const [currentDeviceId, setCurrentDeviceId] = useState(null);

//   useEffect(() => {
//     const codeReader = new BrowserMultiFormatReader();
//     console.log("ZXing code reader initialized");

//     const scan = () => {
//       if (webcamRef.current && currentDeviceId) {
//         codeReader.decodeFromVideoDevice(
//           currentDeviceId,
//           webcamRef.current.video,
//           (result, err) => {
//             if (result) {
//               console.log("QR Code detected:", result.getText());
//               onScan(result.getText());
//             }
//             if (err && !(err instanceof NotFoundException)) {
//               console.error("Error during QR code scan:", err);
//             }
//           }
//         );
//       }
//     };

//     if (isScanning) {
//       scan();
//     }

//     return () => {
//       codeReader.reset();
//     };
//   }, [currentDeviceId, onScan, isScanning]);

//   useEffect(() => {
//     const getDevices = async () => {
//       const devices = await navigator.mediaDevices.enumerateDevices();
//       const videoDevices = devices.filter(
//         (device) => device.kind === "videoinput"
//       );

//       if (videoDevices.length > 0) {
//         const backCamera = videoDevices.find((device) =>
//           device.label.toLowerCase().includes("back")
//         );

//         setCurrentDeviceId(
//           backCamera ? backCamera.deviceId : videoDevices[0].deviceId
//         );
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
//         style={{ width: "100%" }}
//       />
//     </div>
//   );
// };

// export default QRCodeScanner;

import React, { useRef, useEffect } from "react";
import QrScanner from "qr-scanner"; // Import the qr-scanner library
import "qr-scanner/qr-scanner-worker.min"; // Import the worker script

const QRCodeScanner = ({ onScan, isScanning }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const scanner = new QrScanner(videoRef.current, (result) => {
      if (result) {
        console.log("QR Code detected:", result);
        onScan(result);
      }
    });

    if (isScanning) {
      scanner.start();
    }

    return () => {
      scanner.destroy();
    };
  }, [onScan, isScanning]);

  return (
    <div className="qrContainer">
      <video ref={videoRef} style={{ width: "100%" }} />
    </div>
  );
};

export default QRCodeScanner;
