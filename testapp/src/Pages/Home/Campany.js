import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

function Campany({ name, photo }) {
  return (
    <Container>
      <Card style={{ width: 122, height: 30 }}>
        <div style={{width: 192, paddingLeft: 7}}>
          <img
            style={{ width: "10%", display: "flex", marginTop: 3 }}
            src={photo}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: "50%",
            right: "50%",
            bottom: "50%",
            left: "50%",
            marginRight: "-11px",
            fontSize: "small",
          }}
        >
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "-15px",
              position: "relative",
            }}
          >
            {name}
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default Campany;
