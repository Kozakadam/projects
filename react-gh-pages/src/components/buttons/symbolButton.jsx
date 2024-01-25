import React from 'react';

const SymbolButton = ({symbolStyle, symbol, handleClick}) => {
  return (
    <span className={`material-symbols-outlined ${symbolStyle}`} onClick={handleClick}>{symbol}</span>
  );
};

export default SymbolButton;