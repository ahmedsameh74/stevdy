import "./Best.css";


import Report from "../../assets/images/example.svg";

import MainCard from "../MainCard";



const Solution = () => {
  

  return (
    <div className="best" >
    
    <MainCard className={'report-left'}
              title={'Best Platform for the Technological Era'}
              content={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet'}
    />
      
      <div className="report">
          <img src={Report} alt="report" />
      </div>

    </div>
  );
};

export default Solution;
