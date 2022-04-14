import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useAuth } from "../../../auth/useAuth";
import { useForm } from "react-hook-form";
import changePasswordResolver from "../../../validations/changePasswordResolver";
import { useEffect } from "react";
export function ChangePasswordModal({ isOpen, close }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: changePasswordResolver });

  const onSubmit = (formData) => console.log(formData);

  useEffect(() => {
    if (!isOpen) return reset();
  }, [isOpen]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control
              placeholder="Escribe una nueva contraseña"
              {...register("password")}
              type="password"
            />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit(onSubmit)}>
          Actualizar contraseña
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
