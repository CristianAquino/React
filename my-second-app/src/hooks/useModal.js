import { useState } from "react";

export function useModal(initialValue = false) {
  const [isOpenModal, setIsOpenModal] = useState(initialValue);
  const openModal = () => {
    setIsOpenModal(true);
    console.log(isOpenModal);
  };
  const closeModal = () => {
    setIsOpenModal(false);
    console.log(isOpenModal);
  };
  return [isOpenModal, openModal, closeModal];
}
