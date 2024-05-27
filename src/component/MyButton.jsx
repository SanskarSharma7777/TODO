import React from 'react';

const MyButton = ({ text, color, filter }) => {
  return (
    <button
      onClick={filter}
      className={`px-4 py-2 text-white ${color} rounded-md hover:opacity-80 transition duration-300 ease-in-out transform hover:scale-110 shadow-lg`}
    >
      {text}
    </button>
  );
};

export default MyButton;
