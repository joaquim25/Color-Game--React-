import { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameControl from "./components/GameControl";
import Header from "./components/Header";

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

function App() {
  const [tiles, setTiles] = useState(3);
  const [squareColors, setSquareColors] = useState([]);
  const [answer, setAnswer] = useState("");
  const [won, setWon] = useState(false);
  const [madeAPlay, setMadeAPlay] = useState(false);

  const randomColors = (tiles) => {
    setWon(false);
    setMadeAPlay(false);
    let colorSquares = [];
    for (let i = 0; i < tiles; i++) {
      const randomColor = `RGB(${randomNum(256)}, ${randomNum(
        256
      )}, ${randomNum(256)})`;
      colorSquares = [...colorSquares, randomColor];
    }

    defineAnswer(colorSquares);

    return colorSquares;
  };

  const defineAnswer = (colorSquares) => {
    const winner = colorSquares[randomNum(colorSquares.length)];
    setAnswer(winner);
  };

  useEffect(() => {
    setSquareColors(randomColors(tiles));
  }, [tiles]);

  const handleGameMode = (mode) => {
    setTiles(mode);
  };

  const handleNewColors = () => {
    setSquareColors(randomColors(tiles));
  };

  const handleWin = () => {
    setWon(true);
  };

  const handleMadeAPlay = () => {
    setMadeAPlay(true);
  };

  return (
    <>
      <Header won={won} answer={answer} />
      <GameControl
        won={won}
        tiles={tiles}
        handleGameMode={handleGameMode}
        handleNewColors={handleNewColors}
        madeAPlay={madeAPlay}
      />
      <GameBoard
        tiles={squareColors}
        answer={answer}
        won={won}
        handleWin={handleWin}
        handleMadeAPlay={handleMadeAPlay}
      />
    </>
  );
}

export default App;
