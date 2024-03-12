import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Welcome() {
  return (
    <Container className=" mt-4">
      <Row className=" justify-content-center">
        <Col>
          <div className="alert alert-primary" role="alert">
            Benvenuto allo shop!
          </div>
        </Col>
        <div className="col-12 text-center">
          <h2>Benvenuto nel nostro negozio online</h2>
        </div>
      </Row>
    </Container>
  );
}
export default Welcome;
