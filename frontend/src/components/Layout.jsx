import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Layout = () => {
  return (
    
    <div className='flex max-h-[955px] w-[1456px] overflow-x-hidden'>
     
      <SideBar />
      <div>
         <Outlet />
      </div>
    </div>
  );
};

export default Layout;