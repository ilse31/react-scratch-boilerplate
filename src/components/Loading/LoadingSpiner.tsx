import React from "react";

type Props = {};

const LoadingSpiner = (props: Props) => {
  return (
    <div className='flex justify-center items-center w-full h-full min-h-screen'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-row gap-3'>
          <div className='animate-pulse bg-gray-300 dark:bg-slate-800 h-10 w-10 rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpiner;
