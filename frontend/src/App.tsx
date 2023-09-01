import './App.css';
import { useState } from 'react';
import SudokuGrid from './components/SudokuGrid';

function App() {
 const initialGrid: number[][] = Array.from({ length: 9 }, () => Array(9).fill(0));

 const [grid, setGrid] = useState(initialGrid);

 const handleCellValueChange = (row: number, col: number, value: number) => {
      const newGrid = [...grid];
      newGrid[row][col] = value;
      setGrid(newGrid);
    };

    const handleHelpButtonClick = () => {
    };

    const handleCheckButtonClick = () => {
    };

    const handleNewGameButtonClick = () => {
    };

    const handleSolveButtonClick = () => {
    };

    return (
      <div className="app">
        <h1>Sudoku Game</h1>
        <SudokuGrid grid={grid} onCellValueChange={handleCellValueChange} />
        <div className="sudoku-btns">
          <button onClick={handleHelpButtonClick}>Help</button>
          <button onClick={handleCheckButtonClick}>Check</button>
          <button onClick={handleNewGameButtonClick}>New Game</button>
          <button onClick={handleSolveButtonClick}>Solve</button>
        </div>
      </div>
    );
}

export default App

// const App: React.FC = () => {
 
// };

