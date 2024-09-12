import { useState, useRef } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const inputElement = useRef();

  return (
    <div>
      <button
        onClick={() => {
          inputElement.current.focus();
        }}
      >
        Focus!
      </button>
      <input
        ref={inputElement}
        id="input"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
