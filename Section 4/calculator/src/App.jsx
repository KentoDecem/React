import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

function App() {
  const [num, setNum] = useState(0);
  const [equation, setEquation] = useState("");
  const [sum, setSum] = useState(0);

  function calculate() {
    setSum(eval(equation));
  }

  function backspace() {
    setEquation((prev) => {
      if (prev.length == 1) return prev.substring(0, prev.length - 1) + 0;
      return prev.substring(0, prev.length - 1);
    });
  }

  function handleNumber(number) {
    setEquation((prev) => {
      if (prev.length == 1 && prev.includes("0"))
        return prev.substring(0, prev.length - 1) + number;
      return prev + number;
    });
    setNum("");
  }

  function handleSymbol(symbol) {
    setEquation((prev) => {
      if (equation.endsWith("."))
        return prev.substring(0, prev.length - 1) + symbol;
      else if (symbol === "." && equation.includes(".")) return prev;

      if (
        equation.endsWith("+") ||
        equation.endsWith("-") ||
        equation.endsWith("*") ||
        equation.endsWith("/")
      )
        return prev.substring(0, prev.length - 1) + symbol;

      return prev + symbol;
    });
    setNum("");
  }

  return (
    <>
      <main>
        <Display equation={equation} number={num} sum={sum} />
        <Buttons
          handleNumber={handleNumber}
          handleSymbol={handleSymbol}
          calculate={calculate}
          backspace={backspace}
        />
      </main>
    </>
  );
}

export default App;
