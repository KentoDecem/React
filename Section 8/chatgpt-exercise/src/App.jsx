import { useRef } from "react";
import { createPortal } from "react-dom";

function App() {
  const dialog = useRef(null);

  return (
    <>
      {createPortal(<dialog ref={dialog}>test</dialog>, document.body)}

      <button
        onClick={() => {
          dialog.current.showModal();
        }}
      >
        Focus
      </button>
    </>
  );
}

export default App;
