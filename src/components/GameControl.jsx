import "./GameControl.css";

const GameControl = ({
  won,
  tiles,
  handleGameMode,
  handleNewColors,
  madeAPlay,
}) => {
  return (
    <nav className="nav">
      <div className="container nav__flex">
        <p className="nav__item" onClick={handleNewColors}>
          {won ? "PLAY AGAIN?" : "NEW COLORS"}
        </p>
        <p className="state">
          {madeAPlay ? (won ? "Correct!" : "Try Again") : null}
        </p>
        <div className="nav__difficulty">
          <p
            className={
              tiles === 3 ? "nav__item nav__item--selected" : "nav__item"
            }
            onClick={() => handleGameMode(3)}
          >
            EASY
          </p>
          <p
            className={
              tiles === 6 ? "nav__item nav__item--selected" : "nav__item"
            }
            onClick={() => handleGameMode(6)}
          >
            HARD
          </p>
        </div>
      </div>
    </nav>
  );
};

export default GameControl;
