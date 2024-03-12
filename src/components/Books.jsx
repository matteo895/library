import { Card, Col, Container, Row } from "react-bootstrap";
import history from "../data/books/history.json";

const Books = () => {
  return (
    <Container>
      <Row className="d-flex">
        {history.slice(0, 12).map((book) => {
          return (
            <Col xs={12} md={3} key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Books;
/*
    <Card style={{ width: "18rem" }} className="">
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
*/
