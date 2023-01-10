import React from "react";
import CampanyCard from "./CampanyCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ReactOwlCarousel from "react-owl-carousel";
import Carousel from "react-bootstrap/Carousel";


function CampanyCardList() {
  const cardLists = [
    {
      subTitle: "Coca Cola",
      photo: "cocaCola.png",
    },
    {
      subTitle: "Sprite",
      photo: "sprite.jpg",
    },
   
  ];

  return (
    <Container className="card-list">
        {cardLists.map((cardList) => (
          <CampanyCard subTitle={cardList.subTitle} photo={cardList.photo} />
        ))}
    </Container>
  );
}

export default CampanyCardList;
