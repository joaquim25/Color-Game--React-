import "./Header.css";

const Header = ({ won, answer }) => {
  return (
    <header className="header" style={won ? { backgroundColor: answer } : null}>
      <div className="container">
        <h1 className="header__title">
          THE GREAT <span className="header__color">{answer}</span> GUESSING
          GAME
        </h1>
      </div>
    </header>
  );
};

export default Header;
