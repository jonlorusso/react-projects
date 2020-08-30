import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';

function accumulate(value, n) {
  return (value || 0) * 10 + parseInt(n);
}

function evaluate({ leftOperand, operator, value }, setState) {
  switch (operator) {
    case '+':
      value = leftOperand + value;
      break;
    case '-':
      value = leftOperand - value;
      break;
    case '*':
      value = leftOperand * value;
      break;
    case '/':
      value = leftOperand / value;
      break;
    default:
      break;
  }

  return () => setState({ value });
}

function digit({ leftOperand, operator, value }, setState, digit) {
  return () => setState({ leftOperand, operator, value: accumulate(value, digit) });
}

function operator({ value }, setState, operator) {
  return () => setState({ leftOperand: value, operator, value: ' ' });
}

function Calculator(props) {
  const [state, setState] = useState({});

  return (
    <div style={style.calculator}>
      <div style={style.result}>
        <CalculatorButton update={() => setState({})} width="200"  display={state.value} clear="left" />
      </div>

      <div style={style.numpad}>
        <CalculatorButton update={() => setState({})} width="100"  display="clear" />
        <CalculatorButton update={evaluate(state, setState)}  display="=" />
        <CalculatorButton update={operator(state, setState, '+')} display="+" />

        <CalculatorButton update={digit(state, setState, 7)} display="7" />
        <CalculatorButton update={digit(state, setState, 8)} display="8" />
        <CalculatorButton update={digit(state, setState, 9)} display="9" />
        <CalculatorButton update={operator(state, setState, '-')} display="-" />

        <CalculatorButton update={digit(state, setState, 4)} display="4" />
        <CalculatorButton update={digit(state, setState, 5)} display="5" />
        <CalculatorButton update={digit(state, setState, 6)} display="6" />
        <CalculatorButton update={operator(state, setState, '*')} display="*" />

        <CalculatorButton update={digit(state, setState, 1)} display="1" />
        <CalculatorButton update={digit(state, setState, 2)} display="2" />
        <CalculatorButton update={digit(state, setState, 3)} display="3" />
        <CalculatorButton update={operator(state, setState, '/')} display="/" />

        <CalculatorButton update={digit(state, setState, 0)} display="0" />
    </div>
    </div>
  );
}

let style = {
  calculator: {
    width: "300px",
    height: "400px",
    border: "2px solid black",
    backgroundColor: "darkgray",
    margin: "50px",
  },
  result: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    width: "300px",
  },
  numpad: {
    paddingLeft: "50px",
    marginTop: "40px",
    display: "flex",
    flexWrap: "wrap",
    width: "200px",
  }
};

export default Calculator;
