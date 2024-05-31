function Buttons({ handleNumber, handleSymbol, calculate, backspace }) {
  return (
    <div id="buttons">
      <div className="row">
        <button>AC</button>
        <button onClick={backspace}>DD</button>
        <button onClick={() => handleSymbol("/")}>/</button>
        <button onClick={() => handleSymbol("*")}>*</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(7)}>7</button>
        <button onClick={() => handleNumber(8)}>8</button>
        <button onClick={() => handleNumber(9)}>9</button>
        <button onClick={() => handleSymbol("-")}>-</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(4)}>4</button>
        <button onClick={() => handleNumber(5)}>5</button>
        <button onClick={() => handleNumber(6)}>6</button>
        <button onClick={() => handleSymbol("+")}>+</button>
      </div>
      <div className="row">
        <button onClick={() => handleNumber(1)}>1</button>
        <button onClick={() => handleNumber(2)}>2</button>
        <button onClick={() => handleNumber(3)}>3</button>
        <button onClick={() => handleNumber(0)}>0</button>
      </div>
      <div className="row">
        <button className="dot" onClick={() => handleSymbol(".")}>
          .
        </button>
        <button className="sum" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;
