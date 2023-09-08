// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState("");
  const handleCheck = (e) => {
    e.preventDefault();
    for (let i = 0; i < input.length; i++) {
      if (!isNaN(input[i])) {
        setAlert("input has number");
      } else if (isNaN(input[i])) {
        setAlert("input has no number");
      }
    }
    setTimeout(() => {
      setAlert("");
    }, 1000);
  };
  return (
    <div className="App">
      <p>{alert}</p>
      <div className="input">
        <form onSubmit={handleCheck}>
          <input type="text" onChange={(e) => setInput(e.target.value)} />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
