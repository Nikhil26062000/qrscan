import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';


const App = () => {
  const [scannedData, setScannedData] = useState('');
  const [filterData, setFilterData] = useState([]);

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
  };

  return (
    <div class="main_Container">
      <h1>QR Code Scanner</h1>
      <QRCodeScanner onScan={handleScan} />
      {scannedData && (
        <div>
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
          {filterData.length > 0 ? (
            filterData.map((ele, index) => (
              <div key={index}>
                <p>{ele.name}</p>
              </div>
            ))
          ) : (
            <p>No matching data found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
