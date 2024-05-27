import React from "react";

const Loading = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500' />
    </div>
  );
};

export default Loading;
