import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

function Loading() {
  return (
    <div className='w-[1204px] h-[500px] flex items-center justify-center'>
      <FadeLoader color="gray"/>
    </div>
  );
}


export default Loading;