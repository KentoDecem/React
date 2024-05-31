function Log({ turns }) {
  return (
    <ol id="log">
      {console.log(turns)}
      {turns.map((turn, index) => {
        return (
          <li key={index}>
            {turn.player} - {turn.square.row}, {turn.square.col}
          </li>
        );
      })}
    </ol>
  );
}

export default Log;
