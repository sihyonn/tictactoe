import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setXIsNext] = useState(true);

  const calcWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let idx = 0; idx < lines.length; idx++) {
      const [a, b, c] = lines[idx];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const current = history[history.length - 1];
  const winner = calcWinner(current.squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const handleClick = (i) => {
    const newSquares = current.squares.slice();
    if (calcWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setHistory([...history, { squares: newSquares }]);
    setXIsNext((current) => !current);
  };

  const moves = history.map((step, move) => {
    const desc = move ? "#" + move + "로 이동" : "게임 시작하기";
    return (
      <li key={move}>
        <button>{desc}</button>
      </li>
    );
  });

  return (
    <div className="App">
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol className="moves">{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
