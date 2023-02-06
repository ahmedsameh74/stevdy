import './Solution.css'

import eye from '../../assets/icons/eye.svg'
import b from '../../assets/icons/b.svg'
import quality from '../../assets/icons/highq.svg'
import bag from '../../assets/icons/bag.svg'
import arrow from '../../assets/icons/right-arrow.svg'
import Report from "../../assets/images/example.svg";

const Card = ({ icon, title, text, color }) => {
  return (
    <div className="card">
      <div className="icon" style={{background: color}}>
        <img src={icon} alt="icon" />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

const Solution = () => {

  const cards = [
    {
      icon: eye,
      title: "Scale Your Activity",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
      color: "#FF6057",
    },
    {
      icon: b,
      title: "Bootcamps",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
      color: "#36C5AD",
    },
    {
      icon: quality,
      title: "Hight Quality",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
      color: "#CB4BF8",
    },
    {
      icon: bag,
      title: "Get Certifcation",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
      color: "#56E65B",
    },
  ];

  return (
    <div className="solution" id="Bootcamps">
      <div className="left">
        <h2>The best business solution for you</h2>
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
      <div className="right">
        {cards.map((card) => (
          <Card
            icon={card.icon}
            title={card.title}
            color={card.color}
            text={card.text}
            key={card.title}
          />
        ))}
      </div>

      {/* <div className="report"> */}
      <div className="imgcontainer">
        <img src={Report} alt="report" />
      </div>
      {/* </div> */}

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
    </div>
  );
}

export default Solution