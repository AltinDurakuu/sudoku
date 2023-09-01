import React, { useState } from 'react';
import './../styles/Cell.css';

interface CellProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Cell: React.FC<CellProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    if (/^[0-9]$/.test(newValue)) {
      setInputValue(newValue);
      onChange(parseInt(newValue, 10));
    } else {
      setInputValue(inputValue);
    }
  };

  return (
    <input
      type="number"
      className="sudoku-cell"
      value={value == 0 ? "" : inputValue}
      onChange={handleInputChange}
    />
  );
};

export default Cell;
