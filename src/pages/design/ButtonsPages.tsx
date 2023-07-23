import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button/Button";

type Props = {};

const ButtonsPages = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-full'>
      <div className='flex flex-row gap-3'>
        <Button
          variant='danger'
          name='back'
          size='base'
          onClick={() => navigate("/")}
        >
          BACK TO HOME
        </Button>
        <Button
          variant='primary'
          size='base'
          name='backtoDesignSystem'
          onClick={() => navigate("/design-system")}
        >
          BACK
        </Button>
      </div>
    </div>
  );
};

export default React.memo(ButtonsPages);
