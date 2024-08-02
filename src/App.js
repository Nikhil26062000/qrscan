import React, { useState } from 'react';
import QRCodeScanner from './QRCodeScanner';

const App = () => {
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    setScannedData(data);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QRCodeScanner onScan={handleScan} />
      {scannedData && (
        <div>
          <h2>Scanned Data:</h2>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default App;
