import gameLogo from "./../../public/game-logo.png";

function Header() {
  return (
    <header>
      <img src={gameLogo} />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}

export default Header;
