import { useState } from "react";

function Players({ highlight, setNames, names, initialNames }) {
  const [editStatus, setEditStatus] = useState([false, false]);

  function handleChange(event, number) {
    setNames((prev) => {
      const newNames = [...prev];
      newNames[number] = event.target.value;
      return newNames;
    });
  }

  function handleEditStatus(number) {
    if (editStatus[number] && names[number].length < 1) {
      setNames((prev) => {
        const newNames = [...prev];
        newNames[number] = initialNames[number];
        return newNames;
      });
    }

    setEditStatus((prev) => {
      const editors = [...prev];
      editors[number] = !editStatus[number];
      return editors;
    });
  }

  return (
    <ul id="players" className="highlight-player">
      <li className={`player ${highlight == 0 ? "active" : null}`}>
        {!editStatus[0] && <span className="player-name">{names[0]}</span>}
        {editStatus[0] && (
          <input
            onChange={(event) => handleChange(event, 0)}
            value={names[0]}
          />
        )}
        <b className="player-symbol">X</b>
        <button onClick={() => handleEditStatus(0)}>
          {!editStatus[0] ? "Edit" : "Save"}
        </button>
      </li>

      <li className={`player ${highlight == 1 ? "active" : null}`}>
        {!editStatus[1] && <span className="player-name">{names[1]}</span>}
        {editStatus[1] && (
          <input
            onChange={(event) => handleChange(event, 1)}
            value={names[1]}
          />
        )}
        <b className="player-symbol">O</b>
        <button onClick={() => handleEditStatus(1)}>
          {!editStatus[1] ? "Edit" : "Save"}
        </button>
      </li>
    </ul>
  );
}

export default Players;
