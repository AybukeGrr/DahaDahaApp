import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import React from "react";
import Button from "react-bootstrap/Button";

function CocaCola() {
  return (
    <div>
      <Container className="container">
        <Col>
          <Card
            className="card"
            style={{
              marginBottom: 25,
              marginTop: 20,
              borderRadius: 20,
              // boxShadow: "11px 15px 11px -12px red",
              width: 375,
              marginLeft: "-12px",
              border: "none",
              padding: 5,
            }}
          >
            <Card.Title className="cardTitle"></Card.Title>
            <Card.Img
              className="img"
              variant="top"
              src="coffe.jpg"
              style={{ marginTop: "-114px", borderRadius: "0px 0px 0px 90px" }}
            />
            <Card.Body>
              <Card.Text style={{ display: "flex", textAlign: "justify" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
            <Button variant="danger" style={{position: "fixed", bottom: 0, marginLeft: "-45%", width: "90%", borderRadius: 30}}>Hemen Katıl</Button>
          </div>
        </Col>
      </Container>
    </div>
  );
}

export default CocaCola;
