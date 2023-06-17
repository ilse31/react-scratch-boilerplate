import React, { useEffect, memo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

type Props = {};

const HomeDesignSystem = (props: Props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <div className='text-black'>
        <h1>Design System</h1>
        <Link
          className='px-3 py-2 bg-blue-400 rounded-md text-white'
          to={`${location.pathname}/buttons`}
        >
          Buttons
        </Link>
      </div>
    </>
  );
};

export default memo(HomeDesignSystem);
