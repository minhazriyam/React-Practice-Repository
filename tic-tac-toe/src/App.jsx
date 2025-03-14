import { useState } from "react";
import "./App.css";
import TicTacToe from "./assets/TicTacToe/TicTacToe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <TicTacToe />
    </div>
  );
}

export default App;
