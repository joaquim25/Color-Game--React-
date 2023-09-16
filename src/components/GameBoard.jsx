import "./GameBoard.css";
import ColorSquare from "./ColorSquare";

const GameBoard = ({ tiles, answer, won, handleWin, handleMadeAPlay }) => {
  return (
    <div className="container main">
      {tiles.map((tile) => (
        <ColorSquare
          key={tile}
          color={tile}
          answer={answer}
          handleMadeAPlay={handleMadeAPlay}
          handleWin={handleWin}
          won={won}
        />
      ))}
    </div>
  );
};

export default GameBoard;
