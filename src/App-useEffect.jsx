import { useState, useEffect } from "react";

const App = () => {
  const [cursorX, setCursorX] = useState(null);
  const [cursorY, setCursorY] = useState(null);

  useEffect(() => {
    console.log("I am running");

    const handleMouseMove = (event) => {
      setCursorX(event.clientX);
      setCursorY(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      console.log("I am cleaning up");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {cursorX} : {cursorY}
    </div>
  );
};

export default App;
