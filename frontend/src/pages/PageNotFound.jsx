import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
   
    <div className="w-screen h-screen grid items-center justify-center bg-white text-black">
      
      <div className="flex flex-col items-center justify-center p-12 border-2 border-black max-w-lg w-full">
        
      
        <h1 className="text-9xl font-black mb-2 tracking-tighter">
          404
        </h1>

        <h2 className="text-xl font-bold uppercase tracking-widest mb-4 text-center">
          Page Not Found
        </h2>
        <p className="text-center mb-8 font-mono text-sm text-gray-600">
          The link you followed may be broken, or the page may have been removed.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-black text-white font-bold uppercase text-xs tracking-wider hover:bg-gray-800 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;