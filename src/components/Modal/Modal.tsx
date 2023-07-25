import React, { SetStateAction } from "react";
import clsxm from "src/helpers/clsx";
import { MdOutlineClose } from "react-icons/md";

type Props = {
  title: string;
  size: string;
  content: string;
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ title, size, content, showModal, setShowModal }: Props) => {
  return (
    <>
      {showModal && (
        <>
          <div className='w-screen h-screen bg-black bg-opacity-50 fixed top-0 bottom-0 left-0 right-0 mx-auto'></div>
          <div
            className={clsxm(
              "bg-white p-3 rounded-md shadow-md border fixed left-0 right-0 mx-auto z-10 animate-swoosh_from_top",
              [
                size === "sm" && "w-3/4 md:w-1/4",
                size === "md" && "w-3/4 md:w-5/12",
                size === "lg" && "w-3/4 md:w-1/2",
                size === "xl" && "w-3/4 md:w-3/4",
              ]
            )}
          >
            <div className='flex w-full justify-between items-center'>
              <h4 className='font-semibold'>Modal {title}</h4>
              <MdOutlineClose
                onClick={() => setShowModal(false)}
                size={22}
                className='cursor-pointer'
              />
            </div>
            <div className='h-[1.2px] bg-slate-200 my-1'></div>
            <p>{content}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
