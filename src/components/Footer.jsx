import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function MyFooter() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <Container>
        <Row>
          <Col className=" d-flex  justify-content-center opacity-50">
            <div className="d-flex flex-column">
              <a href="#" className="text-decoration-none text-white">
                Informazioni di contatto
              </a>
              <a href="#" className="text-decoration-none text-white ">
                Email: info@example.com
              </a>
              <a href="#" className="text-decoration-none text-white">
                Telefono: 123-456-7890
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;
