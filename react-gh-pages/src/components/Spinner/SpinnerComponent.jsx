import React from 'react';
import './Spinner.css';
import Spinner from "./Spinner";

const SpinnerComponent = ({spinnerCount}) => {
  const spinners = Array(spinnerCount).fill(0).map((v, i) => i + 1);
  return (
    <div id="spinnerContainer">
      {spinners.map(spinnerNumber => {
        return <Spinner spinnerNumber={spinnerNumber} key={spinnerNumber}/>
      })}
    </div>
  );
};

export default SpinnerComponent;
