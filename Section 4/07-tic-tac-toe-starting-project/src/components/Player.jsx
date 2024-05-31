import { useState } from "react";

function Player({ initialName, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditCLick() {
    setIsEditing((prev) => !prev);

    if (isEditing) onChangeName(symbol, playerName);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            placeholder="name"
            onChange={(event) => setPlayerName(event.target.value)}
            value={playerName}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditCLick}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}

export default Player;
