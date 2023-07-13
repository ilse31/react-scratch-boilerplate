import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "src/components/Button/Button";

type Props = {};

const HomeDesignSystem = (props: Props) => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center gap-4 justify-center">
      <h1 className="dark:text-white">Design System</h1>
      <div className="flex flex-row gap-3 justify-center">
        <Link to={`${location.pathname}/buttons`}>
          <Button variant="primary" size="base">
            Button Components
          </Button>
        </Link>
        <Link to={`${location.pathname}/form`}>
          <Button variant="primary" size="base">
            Form Components
          </Button>
        </Link>
        <Link to={`${location.pathname}/alerts`}>
          <Button variant="primary" size="base">
            Alert Components
          </Button>
        </Link>
        <Link to={`${location.pathname}/modals`}>
          <Button variant="primary" size="base">
            Modals Components
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default React.memo(HomeDesignSystem);
