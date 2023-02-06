import "./Best.css";


import arrow from "../../assets/icons/right-arrow.svg";
import Report from "../../assets/images/example.svg";



const Solution = () => {
  

  return (
    <div className="best" >
      <div className="report-left">
        <h2>Best Platform for the Technological Era</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
        <p>
          Learn About Our Success <img src={arrow} alt="" />
        </p>
      </div>

      <div className="report">
        {/* <div className="imgcontainer"> */}
          <img src={Report} alt="report" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default Solution;
