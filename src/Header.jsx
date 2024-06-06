import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
          <Navbar.Brand as={Link} to="/">
            SPACEwendys
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="">
          <span class="animated-badge badge text-bg-success rounded-pill mb-5">
            Welcome to SPACEwendys
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;