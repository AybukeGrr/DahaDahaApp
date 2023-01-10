import React from "react";
import Campany from "./Campany";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function CampanyList() {
  const cardLists = [
    {
      name: "Fanta",
      photo: "fanta.png",
    },
    {
      name: "Exxen",
      photo: "exxen.png",
    },
    {
      name: "Hopi",
      photo: "hopi.png",
    },
    {
      name: "Pegasus",
      photo: "pegasus.png",
    },
    {
      name: "Sprite",
      photo: "sprite.jpg",
    },
    {
      name: "Trendyol",
      photo: "trendyol.png",
    },
    {
      name: "Fizy",
      photo: "fizy.png",
    },
  ];

  return (
    <Container className="card-list">
      <OwlCarousel  loop={true}>
        {cardLists.map((cardList) => (
          <Campany 
          name={cardList.name}
          photo={cardList.photo} />
        ))}
      </OwlCarousel>
    </Container>
  );
}

export default CampanyList;
