import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "src/components/Button";

type Props = {};

const HomeDesignSystem = (props: Props) => {
  const location = useLocation();
  React.useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <>
      <div className='flex flex-col'>
        <h1>Design System</h1>
        <div className='flex flex-row gap-3'>
          <Link to={`${location.pathname}/buttons`}>
            <Button variant='primary' size='base'>
              Button Components
            </Button>
          </Link>
          <Link to={`${location.pathname}/form`}>
            <Button variant='primary' size='base'>
              Form Components
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default React.memo(HomeDesignSystem);
