import React, { memo } from "react";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import { FiSave } from "react-icons/fi";

type Props = {};

const ButtonsPages = (props: Props) => {
  return (
    <>
      <Link to={"/design-system"}>Back</Link>
      <Button variant='primary' leftIcon={FiSave}>
        Save
      </Button>
    </>
  );
};

export default memo(ButtonsPages);
