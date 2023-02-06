import './Home.css'
import Report from '../../assets/images/example.svg'

//icons 
import Icon1 from '../../assets/icons/client-1.png'
import Icon2 from '../../assets/icons/client-2.png'
import Icon3 from '../../assets/icons/client-3.png'
import Icon4 from '../../assets/icons/client-4.png'
import Icon5 from '../../assets/icons/client-5.png'

const Home = () => {
  return (
    <>
      <div className="home" id='home'>
        <div className="left">
          <h1>Advanced Platform</h1>
          <h2>Take your team to the next level</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
          <button>About us</button>
        </div>
        <div className="right">
          <img src={Report} alt="header" />
        </div>
      </div>
      <div className="icons">
        <img src={Icon1} alt="icon" />
        <img src={Icon2} alt="icon" />
        <img src={Icon3} alt="icon" />
        <img src={Icon4} alt="icon" />
        <img src={Icon5} alt="icon" />
      </div>
    </>
  );
}

export default Home