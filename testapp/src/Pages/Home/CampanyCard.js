import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function CampanyCard() {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Col>
        <Card
          className="card"
          style={{
            marginBottom: 25,
            marginTop: 20,
            borderRadius: 20,
            boxShadow: "11px 15px 11px -12px red",
          }}
        >
          <Card.Title className="cardTitle"></Card.Title>
          <Card.Img
            className="img"
            variant="top"
            src="coffe.jpg"
            style={{ marginTop: "-8px", borderRadius: "20px 20px 20px 90px" }}
          />
          <Card.Body>
            <Card.Text style={{ fontSize: 26, fontWeight: "bolder" }}>
              Coca Cola
            </Card.Text>
          </Card.Body>
          <Button
            style={{
              border: "white",
              backgroundColor: "white",
              color: "red",
              fontWeight: 800,
              fontSize: 18,
              marginBottom: 13,
              marginTop: "-11px",
            }}
            className="button"
            onClick={() => {
              navigate("/cocacola");
            }}
          >
            Daha Daha
          </Button>
        </Card>
      </Col>
    </Container>
  );
}

export default CampanyCard;
