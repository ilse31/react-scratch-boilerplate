import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "src/components/Button/Button";
import Modal from "src/components/Modal/Modal";

const ModalPages = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [modalSize, setModalSize] = React.useState<string>("sm");
  function handleShowModal(size: string) {
    setShowModal(true);
    setModalSize(size);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row gap-3">
          <Button variant="danger" size="base" onClick={() => navigate("/")}>
            BACK TO HOME
          </Button>
          <Button
            variant="primary"
            size="base"
            onClick={() => navigate("/design-system")}
          >
            BACK
          </Button>
        </div>
        <div className="mt-5">
          <h1 className="text-center text-white mb-3">MODAL PAGES EXAMPLE</h1>
          {/* <Modal title="Test" content="ini cuma test doank" size="sm" /> */}
          <div className="flex flex-wrap gap-5 justify-center">
            <Button onClick={() => handleShowModal("sm")}>Open Modal sm</Button>
            <Button onClick={() => handleShowModal("md")}>Open Modal md</Button>
            <Button onClick={() => handleShowModal("lg")}>Open Modal lg</Button>
            <Button onClick={() => handleShowModal("xl")}>Open Modal xl</Button>
          </div>

          {showModal && (
            <Modal
              title={modalSize.toUpperCase()}
              size={modalSize}
              content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iure sint odit perspiciatis officia temporibus harum earum excepturi doloribus? Ipsam aut similique mollitia distinctio. Officia doloribus a voluptas veniam nobis voluptatibus illum, iure debitis sequi nisi laboriosam sapiente omnis assumenda, impedit perspiciatis? Sapiente minus aliquam quisquam accusantium qui, veritatis consequatur."
              showModal={showModal}
              setShowModal={setShowModal}
            />
          )}
          {/* <div className="w-1/3 bg-white p-3">
            <form>
              <div className="form-groups">
                <label htmlFor=""></label>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ModalPages;
