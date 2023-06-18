import React, { memo } from "react";
import { Link } from "react-router-dom";

import { FiSave } from "react-icons/fi";
import Button from "src/components/Button";

type Props = {};

const ButtonsPages = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <div className='flex flex-row gap-3'>
        <Link to={"/design-system"}>
          <Button variant='danger' size='sm'>
            BACK TO HOME
          </Button>
        </Link>
        <Link to={"/"}>
          <Button variant='primary' size='sm'>
            BACK
          </Button>
        </Link>
      </div>
      <Button variant='sky' leftIcon={FiSave}>
        Save
      </Button>
    </div>
  );
};

export default memo(ButtonsPages);
