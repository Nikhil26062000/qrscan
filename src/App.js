// import React, { useState } from 'react';
// import QRCodeScanner from './QRCodeScanner';

// const App = () => {
//   const [scannedData, setScannedData] = useState('');
//   const [filterData, setFilterData] = useState([]);
//   const [isScanning, setIsScanning] = useState(true);

//   const person = [
//     { name: 'John', age: 34, id: 1001 },
//     { name: 'pohn', age: 34, id: 1002 },
//     { name: 'aohn', age: 34, id: 1002 },
//     { name: 'Ram', age: 34, id: 1001 },
//     { name: 'Shyam', age: 41, id: 1001 },
//     { name: 'Mohan', age: 340, id: 1001 },
//     { name: 'Sohan', age: 341, id: 1001 },
//   ];

//   const handleScan = (data) => {
//     setScannedData(data);
//     const filteredData = person.filter(person => person.id === parseInt(data));
//     setFilterData(filteredData);
//   };

//   const stopScanning = () => {
//     setIsScanning(false);
//   };

//   const handleBack = () => {
//     setScannedData('');
//     setFilterData([]);
//     setIsScanning(true);
//   };

//   return (
//     <div className="main_Container">
//       <h1>QR Code Scanner</h1>
//       {isScanning ? (
//         <QRCodeScanner onScan={handleScan} stopScanning={stopScanning} />
//       ) : (
//         <>
//           <div>
//             <h2>Scanned Data:</h2>
//             <p>{scannedData}</p>
//             {filterData.length > 0 ? (
//               filterData.map((ele, index) => (
//                 <div key={index}>
//                   <p>{ele.name}</p>
//                 </div>
//               ))
//             ) : (
//               <p>No matching data found.</p>
//             )}
//           </div>
//           <button onClick={handleBack}>Back</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;





// import React, { useState } from 'react';
// import QRCodeScanner from './QRCodeScanner';
// import Modal from 'react-modal';

// const App = () => {
//   const [scannedData, setScannedData] = useState('');
//   const [filterData, setFilterData] = useState([]);
//   const [isScanning, setIsScanning] = useState(true);

//   const person = [
//     { name: 'John', age: 34, id: 1001 },
//     { name: 'pohn', age: 34, id: 1002 },
//     { name: 'aohn', age: 34, id: 1002 },
//     { name: 'Ram', age: 34, id: 1001 },
//     { name: 'Shyam', age: 41, id: 1001 },
//     { name: 'Mohan', age: 340, id: 1001 },
//     { name: 'Sohan', age: 341, id: 1001 },
//   ];

//   const handleScan = (data) => {
//     setScannedData(data);
//     const filteredData = person.filter(person => person.id === parseInt(data));
//     setFilterData(filteredData);
//     setIsScanning(false); // Stop scanning when QR code is detected
//   };

//   const handleBack = () => {
//     setScannedData('');
//     setFilterData([]);
//     setIsScanning(true); // Resume scanning
//   };

//   return (
//     <div className="main_Container">
//       <h1>QR Code Scanner</h1>
//       <QRCodeScanner onScan={handleScan} isScanning={isScanning} />
//       <Modal
//         isOpen={!isScanning}
//         onRequestClose={handleBack}
//         contentLabel="Scanned Data"
//         ariaHideApp={false}
//       >
//         <h2>Scanned Data:</h2>
//         <p>{scannedData}</p>
//         {filterData.length > 0 ? (
//           filterData.map((ele, index) => (
//             <div key={index}>
//               <p>{ele.name}</p>
//             </div>
//           ))
//         ) : (
//           <p>No matching data found.</p>
//         )}
//         <button onClick={handleBack}>Back</button>
//       </Modal>
//     </div>
//   );
// };

// export default App;




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
      <h1>QR Code Scanner</h1>
      <QRCodeScanner onScan={handleScan} isScanning={isScanning} />
      <Modal
        isOpen={!isScanning}
        onRequestClose={handleBack}
        contentLabel="Scanned Data"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
      >
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
        <button onClick={handleBack}>Back</button>
      </Modal>
    </div>
  );
};

export default App;

