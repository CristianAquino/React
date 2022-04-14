import { Modal, Alert, Button, ModalBody } from "react-bootstrap";
import { useAuth } from "../../../auth/useAuth";
export function DeleteModal({ isOpen, close }) {
  const { logout } = useAuth();
  const handleDele = () => {
    // close();
    logout();
  };
  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          ¿Estas seguro que deseas eliminar permanentemente tu cuenta?
          <b>se perderan tus datos</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDele}>
          Eliminar mi cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
