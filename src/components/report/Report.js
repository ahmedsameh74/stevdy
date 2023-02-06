import './Report.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import report from "../../assets/images/example.svg";

const Report = () => {
  const slideContent = [
    {
      path: report,
      id: 1,
    },
    {
      path: report,
      id: 2,
    },
    {
      path: report,
      id: 3,
    },
    
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 350 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container" >
      <div className="report-center">
        <h3>Advanced Customer Service Platform</h3>
        <h2>Platform Overview</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
      </div>
      <div className="report-img">
        <Carousel
          responsive={responsive}
          infinite
          keyBoardControl
          showDots
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="slide"
          draggable
          dotListClass="custom-dot-list-style"
          arrows={false}
          autoPlay
          // autoPlaySpeed={2000}
        >
          {slideContent.map((slide, index) => (
            <div className="imghandler" key={slide.id}>
              <img src={slide.path} alt={slide.path} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Report