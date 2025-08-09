// src/components/Sellers.jsx
import React from 'react';
import Categories from './Categories'; // Import the new Categories component

const Sellers = () => {
  return (

    <div className="pt-20 px-4 max-w-screen-lg mx-auto flex flex-col items-center">
  
  
      <div className="w-half"> 
        <Categories />
      </div>
    </div>
  );
};

export default Sellers;
