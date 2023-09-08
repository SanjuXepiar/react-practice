import "./App.css";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  //
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="countDisplay">{count}</div>
    </div>
  );
}

export default App;
