import React from 'react';
import Cell from './Cell';
import "./../styles/SudokuGrid.css"

interface SudokuGridProps {
  grid: number[][];
  onCellValueChange: (row: number, col: number, value: number) => void;
}

const SudokuGrid: React.FC<SudokuGridProps> = ({ grid, onCellValueChange }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((value, colIndex) => (
            <Cell
              key={colIndex}
              value={value}
              onChange={(newValue) => onCellValueChange(rowIndex, colIndex, newValue)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default SudokuGrid;
