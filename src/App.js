import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("useEffect called");
  }, [count]);

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(() => 0), 5000);
  }, []);

  console.log("Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>I've been clicked {count} times </button>
      <input type="text" onChange={(e) => setText(() => e.target.value)} value={text} placeholder="Type away..." />
      <br />
    </div>
  );
}

export default App;
