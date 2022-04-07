import style from "./Modal.module.css";
export function Modal({ isOpen, closeModal, children, title }) {
  // para no ejecutar dentro
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={closeModal}
      className={`${style.modal} ${isOpen && style.open_modal}`}
    >
      <div className={`${style.modal_dialog}`} onClick={handleModalDialogClick}>
        <h1>{title}</h1>
        {children}
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
}
