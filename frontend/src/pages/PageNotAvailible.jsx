import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotAvailable = ({ label }) => {
  const navigate = useNavigate();

  return (
   
    <div className="w-[1236px] h-screen grid items-center justify-center bg-white text-black">
      
      <div className="flex flex-col items-center justify-center p-10 border-2 border-black max-w-md w-full">
      
        <div className="text-6xl mb-6">
          Ø
        </div>

      
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-2 text-center">
          Unavailable
        </h2>

        <p className="text-center mb-8 font-mono text-sm">
          The <span className="font-bold border-b border-black">{label}</span> page is not ready.
        </p>

        <button 
          onClick={() => navigate(-1)}
          className="px-8 py-3 bg-black text-white font-bold uppercase text-xs tracking-wider hover:bg-gray-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PageNotAvailable;