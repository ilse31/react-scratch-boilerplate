import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const DesignSystem = (props: Props) => {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center w-full '>
      <h1 className='text-4xl capitalize'>wellcome to our design system</h1>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default DesignSystem;
