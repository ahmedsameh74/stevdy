import "./Grow.css";

import arrow from "../../assets/icons/right-arrow.svg";
import Report from "../../assets/images/example.svg";

const Grow = () => {
  return (
    <div className="grow">
      <div className="report-left">
        <h2>Acceleration Process to Grow Your Business</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
        <button>About us</button>
      </div>

      <div className="report">
        <div className="dif-card">
          <h3>Market Research</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="dif-card">
          <h3>Market Research</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="dif-card">
          <h3>Market Research</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grow;
