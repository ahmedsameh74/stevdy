import {  BsStarFill, BsStarHalf } from "react-icons/bs";

const RateStar = ({
  rate,
  style,
  size,
}) => {
  const count = 5;
  const data = Array.from({
    length: Math.min(Math.floor(rate || 0), count),
  }).map(() => 1);
  rate = Number(rate);

  if (rate && rate % 1 !== 0) {
    data.push(0.5);
  }

  const Icon = ({ name, ...rest }) => {
    if (name === "star") {
      return <BsStarFill {...rest} />;
    }
    return <BsStarHalf {...rest} />;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      {data.map((item, index) => {
        return (
          <div key={index}>
            <Icon
              name={item === 1 ? "star" : "star-half-sharp"}
              size={size}
              color="rgb(203, 72, 249)"
            />
          </div>
        );
      })}
      {Array.from({ length: Math.floor(count - rate) }).map((item, index) => {
        return (
          <div key={index}>
            <Icon name={"star"} size={size} color="#D8D8D8" />
          </div>
        );
      })}
    </div>
  );
};

export default RateStar;
