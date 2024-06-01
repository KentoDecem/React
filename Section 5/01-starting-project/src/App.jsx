import { useState } from "react";
import Header from "./components/Header";
import Result from "./components/Result";
import UserInputs from "./components/UserInputs";

function App() {
  const [values, setValues] = useState({
    initialInvestment: null,
    annualInvestment: null,
    expectedReturn: null,
    duration: null,
  });

  return (
    <>
      <Header />
      <UserInputs setValues={setValues} />
      <Result values={values} />
    </>
  );
}

export default App;
