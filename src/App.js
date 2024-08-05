import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner'; // Import the updated component

const App = () => {
  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isScanning, setIsScanning] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const person = [
    { name: 'John', age: 34, id: 1001 },
    // ... other person data ...
  ];

  const handleScan = (data) => {
    setScannedData(data);
    const filteredData = person.filter((person) => person.id === parseInt(data));
    setFilterData(filteredData);
    setIsScanning(false); // Stop scanning when QR code is detected
    setShowPopup(true); // Show popup when QR code is scanned
  };

  const handleBack = () => {
    setScannedData('');
    setFilterData([]);
    setIsScanning(true); // Resume scanning
    setShowPopup(false); // Hide popup
  };

  return (
    <div className="main_Container">
      
      <QRCodeScanner onScan={handleScan} isScanning={isScanning} />
      <p>{scannedData}</p>
    </div>
  );
};

export default App;
