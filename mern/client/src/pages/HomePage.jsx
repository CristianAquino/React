import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export function HomePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{ span: "12" }} md={{ span: 6 }} className="mb-5">
          <h2>Bienvenido a Gestor de Tareas</h2>
          <p>¡Aqui podras gestionar tus proyectos!</p>
          <p>Marca tus tareas como terminadas, agrega, elimina o actualiza</p>
          <div>
            <Link to="login">Ingresa</Link> o{" "}
            <Button as={Link} to="register" className="ml-1">
              Crea una cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img src="/img/task-manager.svg" alt="" className="img-fluid" />
          <p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
        </Col>
      </Row>
    </Container>
  );
}
