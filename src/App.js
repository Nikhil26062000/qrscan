import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';
import Modal from 'react-modal';

const App = () => {
  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [isScanning, setIsScanning] = useState(true);

  const person = [
    { name: 'John', age: 34, id: 1001 },
    { name: 'pohn', age: 34, id: 1002 },
    { name: 'aohn', age: 34, id: 1002 },
    { name: 'Ram', age: 34, id: 1001 },
    { name: 'Shyam', age: 41, id: 1001 },
    { name: 'Mohan', age: 340, id: 1001 },
    { name: 'Sohan', age: 341, id: 1001 },
  ];

  const handleScan = (data) => {
    setScannedData(data);
    const filteredData = person.filter(person => person.id === parseInt(data));
    setFilterData(filteredData);
    setIsScanning(false); // Stop scanning when QR code is detected
  };

  const handleBack = () => {
    setScannedData('');
    setFilterData([]);
    setIsScanning(true); // Resume scanning
  };

  return (
    <div className="main_Container">
      <h1>QR Code</h1>
      <QRCodeScanner onScan={handleScan} isScanning={isScanning} />
      <Modal
        isOpen={!isScanning}
        onRequestClose={handleBack}
        contentLabel="Scanned Data"
        ariaHideApp={false}
      >
        <div className="ReactModal__Content">
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
          {filterData.length > 0 ? (
            filterData.map((ele, index) => (
              <div key={index}>
                <p>{ele.name}</p>
              </div>
            ))
          ) : (
            <p>No Data found.</p>
          )}
          <button onClick={handleBack}>Back</button>
        </div>
      </Modal>
    </div>
  );
};

export default App;

