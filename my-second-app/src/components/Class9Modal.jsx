import { Fragment, useState } from "react";
import { useModal } from "../hooks/useModal";
import { Modal } from "./Modal";

export function Class9Modal() {
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();
  const [isOpenChatModal, openChatModal, closeChatModal] = useModal();
  return (
    <Fragment>
      <button onClick={openLoginModal}>Open Login Modal</button>
      <button onClick={openChatModal}>Open Chat Modal</button>
      <Modal
        isOpen={isOpenLoginModal}
        closeModal={closeLoginModal}
        title="LOGIN"
      >
        <form>
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
        </form>
      </Modal>
      <Modal isOpen={isOpenChatModal} closeModal={closeChatModal} title="CHAT">
        <p>Hola Chat</p>
      </Modal>
    </Fragment>
  );
}
