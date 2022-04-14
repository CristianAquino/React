import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
export function Navigation() {
  const { logout } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand as={NavLink} to="/">
        Task Manager
      </Navbar.Brand>
      <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="resposive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link as={NavLink} to="projects">
            Projects
          </Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item as={NavLink} to="admin/users">
              Users
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="register">
            Register
          </Nav.Link>
          <Nav.Link as={NavLink} to="account">
            Account
          </Nav.Link>
          <Nav.Link to="account" onClick={logout}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
