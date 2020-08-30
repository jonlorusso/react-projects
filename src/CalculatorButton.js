import React from 'react';

function CalculatorButton(props) {
  let width = parseInt(props.width || 50) + "px";


  let style = {
    float: "left",
    width: width,
    height: "50px",
    clear: props.clear,
    border: "1px solid black",
  };

  let onClick = () => props.update(props.display);

  return (
    <button onClick={onClick} style={style}>{props.display}</button>
  );
}

export default CalculatorButton;
