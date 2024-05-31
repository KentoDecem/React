import { useState } from "react";
import Header from "./components/Header";
import Players from "./components/Players";

function App() {
  const [winnerName, setWinnerName] = useState("");
  const [highlight, setHighlight] = useState(Math.round(Math.random()));
  const initialNames = ["Player 1", "Player 2"];
  const [names, setNames] = useState(initialNames);

  const [board, setBoard] = useState({
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
  });
  const winPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function gameOver(winner) {
    let victorious = null;
    if (winner === "O") victorious = names[1];
    else if (winner === "X") victorious = names[0];
    setWinnerName(victorious);
    setBoard({
      0: null,
      1: null,
      2: null,
      3: null,
      4: null,
      5: null,
      6: null,
      7: null,
      8: null,
    });
  }

  function checkIfWin() {
    const keysWithX = [];
    const keysWithO = [];

    for (let key in board) {
      if (board[key] === "X") keysWithX.push(parseInt(key));
      else if (board[key] === "O") keysWithO.push(parseInt(key));
    }
    console.log("X: ", keysWithX);
    console.log("O: ", keysWithO);

    for (let positions of Object.values(winPositions)) {
      console.log(positions);
      const [a, b, c] = positions;
      if (
        keysWithX.includes(a) &&
        keysWithX.includes(b) &&
        keysWithX.includes(c)
      ) {
        gameOver("X");
      }
      if (
        keysWithO.includes(a) &&
        keysWithO.includes(b) &&
        keysWithO.includes(c)
      ) {
        gameOver("O");
      }
    }
  }
  checkIfWin();

  function turn(position) {
    const marker = highlight == 1 ? "O" : "X";

    setBoard((prevBoard) => ({
      ...prevBoard,
      [position]: marker,
    }));
    setHighlight(highlight === 1 ? 0 : 1);
  }

  return (
    <>
      <Header />
      <main id="game-container">
        {winnerName && (
          <div id="game-over" onClick={() => setWinnerName(null)}>
            <h2>Game Over!</h2>
            <p>{winnerName}</p>
          </div>
        )}
        <Players
          highlight={highlight}
          setNames={setNames}
          names={names}
          initialNames={initialNames}
        />
        <div id="game-board">
          <ol>
            {Object.keys(board).map((value) => (
              <button
                key={value}
                disabled={board[value] !== null}
                onClick={() => turn(value)}
              >
                {board[value]}
              </button>
            ))}
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
