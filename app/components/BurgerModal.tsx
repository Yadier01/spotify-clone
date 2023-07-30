import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
export const BurgerModal = ({ modalOpen, onClickHandler }: any) => {
  const handleCloseModal = () => {
    if (modalOpen) {
      onClickHandler();
    }
  };
  return (
    <>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleCloseModal}
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="absolute overflow-hidden  right-0 top-0 z-10 w-screen bg-black h-screen">
          <div className="flex   flex-col gap-8 p-8">
            <div className="flex w-full   justify-end ">
              <AiOutlineClose size={25} onClick={handleCloseModal} />
            </div>
            <div className="flex text-2xl flex-col gap-7 pb-5 font-bold">
              <p>Login</p>
              <p>Sign up</p>
            </div>
            <div className="border-t-2 w-1/12  py-4"></div>
            <div className="flex flex-col text-lg font-bold gap-4">
              <p>Premium</p>
              <p> Help</p>
              <p> Download</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </Modal>
      {/* {modalOpen && (
        <div className="absolute overflow-hidden  right-0 top-0 z-10 w-screen bg-black h-screen">
          <div className="flex   flex-col gap-8 p-8">
            <div className="flex w-full   justify-end ">
              <AiOutlineClose size={25} onClick={onClickHandler} />
            </div>
            <div className="flex text-2xl flex-col gap-7 pb-5 font-bold">
              <p>Login</p>
              <p>Sign up</p>
            </div>
            <div className="border-t-2 w-1/12  py-4"></div>
            <div className="flex flex-col text-lg font-bold gap-4">
              <p>Premium</p>
              <p> Help</p>
              <p> Download</p>
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};
