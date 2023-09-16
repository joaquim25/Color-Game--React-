import "./ColorSquare.css";

const ColorSquare = ({ color, answer, handleWin, won, handleMadeAPlay }) => {
  const handleSquareClick = (e) => {
    handleMadeAPlay();
    answer.toLowerCase() === e.target.style.backgroundColor
      ? handleWin()
      : (e.target.style.backgroundColor = "transparent");
  };

  return (
    <div
      onClick={handleSquareClick}
      className="main__square"
      style={won ? { backgroundColor: answer } : { backgroundColor: color }}
    ></div>
  );
};

export default ColorSquare;
