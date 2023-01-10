import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { IconButton } from "@mui/material";
import "./Navbar.css"
import Col from "react-bootstrap/esm/Col";

function BrandExample() {
  return (
    <>
      <Navbar style={{ backgroundColor: "white", margin: 10 }}>
        <Container>
          <Col style={{display: "flex"}}>
            <Navbar.Brand href="#home">
              <img style={{ maxWidth: 100 }} alt="" src="/dahaLogo.png" />
            </Navbar.Brand>
          </Col>
          <Col style={{display: "flex", justifyContent: "end"}}>
            <Button
              variant="danger"
              style={{ borderRadius: 18 }}
            >
              Giriş Yap
            </Button>
            <IconButton style={{ color: "black", display: "flex", justifyContent: "end" }}>
              <AccountCircleIcon />
            </IconButton>
          </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
