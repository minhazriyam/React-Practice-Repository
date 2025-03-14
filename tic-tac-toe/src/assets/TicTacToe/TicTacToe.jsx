import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "./circle.png";
import cross_icon from "./cross.png";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check for a winner
  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        setWinner(newBoard[a]); // Set the winner (X or O)
        return;
      }
    }
  };

  // Handle click
  const toggle = (index) => {
    if (board[index] !== "" || winner) return; // Prevent overwrite or play after winning

    let newBoard = [...board];
    newBoard[index] = count % 2 === 0 ? "x" : "o";
    setBoard(newBoard);
    setCount(count + 1);
    checkWinner(newBoard); // Check winner after move
  };

  // Reset game
  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCount(0);
    setWinner(null);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>

      {winner ? (
        <h2 className="winner"> Winner: {winner.toUpperCase()} </h2>
      ) : null}

      <div className="board">
        {board.map((value, index) => (
          <div key={index} className="boxes" onClick={() => toggle(index)}>
            {value === "x" && <img src={cross_icon} alt="X" />}
            {value === "o" && <img src={circle_icon} alt="O" />}
          </div>
        ))}
      </div>

      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
