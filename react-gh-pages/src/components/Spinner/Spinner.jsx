import React from 'react';

const Spinner = ({spinnerNumber}) => {
  return (
    <div>
      <div id={`spinner${spinnerNumber}`}>
        <div className={`circle circle${spinnerNumber}`}></div>
      </div>
    </div>
  );
};

export default Spinner;
