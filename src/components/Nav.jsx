import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
      <Container fluid className="justify-content-between">
        <Navbar.Brand href="#home" className="text-primary fs-2">
          Ebooks
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">HOME</Nav.Link>
            <Nav.Link href="#pricing">ABOUT</Nav.Link>
            <Nav.Link href="#pricing">BROWSER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
