import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';

const QRCodeScanner = ({ onScan }) => {
  const webcamRef = useRef(null);
  const [currentDeviceId, setCurrentDeviceId] = useState(null);
  const [devices, setDevices] = useState([]);

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

    scan();

    return () => {
      codeReader.reset();
    };
  }, [currentDeviceId, onScan]);

  useEffect(() => {
    const getDevices = async () => {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      setDevices(videoDevices);
      if (videoDevices.length > 0) {
        setCurrentDeviceId(videoDevices[0].deviceId);
      }
    };

    getDevices();
  }, []);

  const handleSwitchCamera = () => {
    const currentIndex = devices.findIndex(device => device.deviceId === currentDeviceId);
    const nextIndex = (currentIndex + 1) % devices.length;
    setCurrentDeviceId(devices[nextIndex].deviceId);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        videoConstraints={{ deviceId: currentDeviceId }}
        screenshotFormat="image/jpeg"
        style={{ width: '100%' }}
      />
      <button onClick={handleSwitchCamera}>
        Switch Camera
      </button>
    </div>
  );
};

export default QRCodeScanner;
