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
      <video ref={videoRef} className="videoFullHeight" />
    </div>
  );
};

export default QRCodeScanner;
