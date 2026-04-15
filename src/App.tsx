import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>AAF Test App</h1>
      <p>Served from GitHub via browser-native dev server.</p>
      <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>
    </div>
  );
}
