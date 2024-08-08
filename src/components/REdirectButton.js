// RedirectButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectButton = ({ path, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button className="p-[10px] bg-green-400 rounded-md" onClick={handleClick}>
      {children}
    </button>
  );
};

export default RedirectButton;
