import "./Testomintals.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import report from "../../assets/images/example.svg";
import RateStar from "../stars";

const statics = [
    { name: "570", text: "Dowloads" },
    { name: "570", text: "Active Users" },
    { name: "570", text: "Positive feedbacks" },
    { name: "570", text: "+ rating" },
]

const Testomintals = () => {

    const slideContent = [
      {
        path: report,
        name: "Ahmed Sameh",
        title: 'Frontend Developer',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        id: 1,
      },
      {
        path: report,
        name: "Ahmed Sameh",
        title: 'Frontend Developer',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        id: 2,
      },
      {
        path: report,
        name: "Yasmine ibrahim",
        title: 'Frontend Developer',
        text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
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
    <div className="testomintal" id="Testominials">
      <h2>Don't Just Take our Word for it!</h2>
      <div className="statics">
        {statics.map((statics) => (
          <div className="static" key={statics.text}>
            <h3>{statics.name}</h3>
            <p>{statics.text}</p>
          </div>
        ))}
      </div>

      <div className="testomintals-section">
        {/* <Carousel
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
            <div className="test" key={index}>
              <div className="test-card">
                <div className="img">
                  <img src={slide.path} alt={slide.path} />
                </div>
                <div className="content">
                  <h3>{slide.name}</h3>
                  <p>{slide.title}</p>
                  <p>{slide.text}</p>
                  <div className="stars">
                    <RateStar
                      rate={Math.min(5 * 1, 5)}
                      size={16}
                      style={{ justifyContent: "spasce-between" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel> */}
        
             <div className="test" >
              <div className="test-card">
                <div className="img">
                  <img src={slideContent[0].path} alt={slideContent[0].path} />
                </div>
                <div className="content">
                  <h3>{slideContent[0].name}</h3>
                  <p>{slideContent[0].title}</p>
                  <p>{slideContent[0].text}</p>
                  <div className="stars">
                    <RateStar
                      rate={Math.min(5 * 1, 5)}
                      size={16}
                      style={{ justifyContent: "spasce-between" }}
                    />
                  </div>
                </div>
              </div>
            </div> 
        <div className="report-left">
          <h2>Grow Your Business and Join Our Happy Users</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <button>About us</button>
        </div>
      </div>
    </div>
  );
};

export default Testomintals;
