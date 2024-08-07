


import React, { useEffect, useState } from 'react';
import QRCodeScanner from './QRCodeScanner'; // Import the updated component
import Top_Header from './Top_Header';
import QR_Static from './QR_Static';

const App = () => {
  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isScanning, setIsScanning] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [jsonData, setJsonData] = useState([]);

  
 

  const handleScan = (data) => {
    setScannedData(data);
    // Filter data based on scanned QR code
    const filteredData = jsonData && jsonData.filter((ele) => ele.qr_id === data);
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
    <>
    <div className="w-screen ">
      <Top_Header title="Home Page"/>
      <div className="main_Container">
        {scannedData && scannedData ? <QR_Static/> : <QRCodeScanner onScan={handleScan} isScanning={isScanning} />}
        {showPopup && (
          <div className="popupOverlay" onClick={handleBack}>
            <div className="popupContent" onClick={(e) => e.stopPropagation()}>
              {filterData.length > 0 ? (
                filterData.map((data) => (
                  <div key={data.qr_id}>
                    <p>ID: {data.qr_id}</p>
                    {/* Display other relevant fields */}
                    <p>Details: {data.name}</p>
                  </div>
                ))
              ) : (
                <p>No data found</p>
              )}
              <button onClick={handleBack}>Back</button>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default App;
