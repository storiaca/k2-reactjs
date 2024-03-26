import { useState, useEffect } from "react";
import Cell from "./components/Cell";

function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);

  const [player, setPlayer] = useState("cross");

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    handleCheckWinner();
  }, [cells]);

  let checkCells = cells.every((cell) => cell !== "");

  function handleCheckWinner() {
    let winnerCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winnerCombination.forEach((comb) => {
      let crossWinner = comb.every((cell) => cells[cell] === "cross");
      let circleWinner = comb.every((cell) => cells[cell] === "circle");

      if (crossWinner) {
        setWinner("Winner is Cross");
        console.log(winner);
      } else if (circleWinner) {
        setWinner("Winner is Circle");
      } else if (checkCells) {
        setWinner("We dont have a winner");
      }
    });
  }

  function handleResetGame() {
    let emptyArray = new Array(9).fill("");

    setCells(emptyArray);
    setWinner(null);
  }

  return (
    <div className="app">
      <h1 className="title">X/O Game</h1>
      <div className="squareContainer">
        {cells.map((cell, index) => {
          return (
            <Cell
              key={index}
              id={index}
              cell={cell}
              cells={cells}
              setCells={setCells}
              player={player}
              setPlayer={setPlayer}
              winner={winner}
            />
          );
        })}
      </div>

      <button onClick={handleResetGame} disabled={winner ? false : true}>
        Reset Game
      </button>

      {winner && <h2>{winner}</h2>}
    </div>
  );
}

export default App;
