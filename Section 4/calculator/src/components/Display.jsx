function Display({ number, equation, sum }) {
  return (
    <div id="display">
      <h3>
        {equation}
        {number}
      </h3>
      <h2>{sum}</h2>
    </div>
  );
}

export default Display;
