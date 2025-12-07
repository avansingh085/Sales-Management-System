import React from 'react';
import Search from './Search';

const Header = ({search,setSearch}) => {
  return (
   
    <div className="w-[1204px] h-[44px] flex items-center justify-between px-[16px] bg-white">
      
      <div className="text-[16px] font-bold text-gray-900">
        Sales Management System
      </div>

      <Search search={search} setSearch={setSearch} />
    </div>
  );
};

export default Header;