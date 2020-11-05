import React from "react";

const myStyle = {
  color: "green",
  fontFamily: "sans-serif",
  fontSize: "100px",
  backgroundColor: "yellow",
};

const otherStyle = {
  color: "green",
  fontFamily: "sans-serif",
  fontSize: "100px",
  backgroundColor: "blue",
};

let condition = true;

const ThirdComponent = () => {
  return (
    <h3 id="third-component" style={condition ? myStyle : otherStyle}>
      {condition
        ? "The component background is Yellow"
        : "The component Background is Blue"}
    </h3>
  );
};

export default ThirdComponent;


