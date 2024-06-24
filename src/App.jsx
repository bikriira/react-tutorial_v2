import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [sync, setSync] = useState(false);

  useEffect(() => {
    document.title = "React tutorial " + sync; // + conter is not recommended, use the value inluded in dependencyList
  }, [sync]); // this useEffect will be trigered when the state value sync is changed only

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
      <button
        onClick={(e) => {
          setSync((currentSyncState) => !currentSyncState);  //setSync(!sync) wont work becouse it is changing the orginal value directly
        }}
      >
        sync
      </button>
    </div>
  );
}

// Key point: whenever a useState is called a component is re-rendered, and by default useEffect is called
