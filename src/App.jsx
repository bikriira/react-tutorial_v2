import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = "React tutorial " + counter;
  });

  return (
    <div>
      <div>Youclicked the button {counter} timed!</div>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
}

// Key point: whenever a useState is called a component is re-rendered, and by default useEffect is called
