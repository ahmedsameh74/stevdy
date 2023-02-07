import "./Grow.css";

const Card = ({number, line}) => {
  return (
    <div className="dif-card">
      <div className="h3">
        <div className="circle">{number}</div> Market Research
      </div>
      <div className="p">
        {line && <div className="vertical-line"></div>}
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </div>
    </div>
  );
}



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
      {Array.from('123').map((item, index) => {
        return <Card key={index} number={index+1} line={true} />
      })}
      </div>
    </div>
  );
};

export default Grow;
