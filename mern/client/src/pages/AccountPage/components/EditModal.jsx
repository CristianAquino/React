import { Modal, Form, Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import editAccountResolver from "../../../validations/editAccountResolver";
import { roles } from "../../../helpers/roles";
import { useAuth } from "../../../auth/useAuth";
export function EditModal({ isOpen, close, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editAccountResolver });

  const isDirty = !!Object.keys(dirtyFields).length;

  const onSubmit = (formData) => {
    if (!isDirty) return;
    updateUser(formData);
    close();
  };

  const { updateUser, hasRole } = useAuth();

  useEffect(() => {
    if (!isOpen) return reset();
  }, [isOpen]);

  useEffect(() => {
    if (user)
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
  }, [user]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Escribe un nombre"
              {...register("name")}
              type="text"
            />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Escribe un correo electronico"
              {...register("email")}
              type="email"
            />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol</Form.Label>
            <Form.Control
              as="select"
              disabled={!hasRole("admin")}
              {...register("role")}
            >
              {Object.keys(roles).map((role) => (
                <option key={role}>{role}</option>
              ))}
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty}
        >
          Actualizar cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
