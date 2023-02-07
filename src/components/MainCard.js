import arrow from "../assets/icons/right-arrow.svg";

const MainCard = ({className, title, content, style}) => {
  return (
    <div className={className} style={style}>
      <h2>{title}</h2>
      <p>
        {content}
      </p>
      <p>
        Learn About Our Success <img src={arrow} alt="" />
      </p>
    </div>
  );
};

export default MainCard;
