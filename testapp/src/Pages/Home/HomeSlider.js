import Carousel from "react-bootstrap/Carousel";

function HomeSlider() {
 return (
   <Carousel style={{ padding: 15, borderRadius: 25, marginTop: "-12px", marginBottom: 10 }}>
     <Carousel.Item>
       <img
         style={{ borderRadius: 30 }}
         className="d-block w-100"
         src="homeSlide1.png"
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         style={{ borderRadius: 30 }}
         className="d-block w-100"
         src="homeSlide2.png"
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         style={{ borderRadius: 30 }}
         className="d-block w-100"
         src="homeSlide3.png"
         alt="First slide"
       />
     </Carousel.Item>
     <Carousel.Item>
       <img
         style={{ borderRadius: 30 }}
         className="d-block w-100"
         src="homeSlide4.png"
         alt="First slide"
       />
     </Carousel.Item>
   </Carousel>
 );
}

export default HomeSlider;
