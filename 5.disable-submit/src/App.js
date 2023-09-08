import "./App.css";
import { useState } from "react";
function App() {
  const [target1, setTarget1] = useState("");
  const [target2, setTarget2] = useState("");
  const [alert, setAlert] = useState("");
  const [disable, setDisable] = useState(false);
  const handleInput = (e) => {
    e.preventDefault();
    // for (let i = 0; i < target1.length; i++) {
    if (target1 === target2) {
      console.log("password1:", target1);
      console.log("password2:", target2);
      setAlert("password matches");
    } else {
      setDisable(true);
    }
    // }
    setTimeout(() => {
      setAlert("");
    }, 1000);
  };

  return (
    <div className="App">
      <p>{alert}</p>
      <form onSubmit={handleInput}>
        <label htmlFor="password">Input Password:</label>
        <input type="password" onChange={(e) => setTarget1(e.target.value)} />
        <br />
        <label htmlFor="password">Confirm Password:</label>
        <input type="password" onChange={(e) => setTarget2(e.target.value)} />
        <br />
        <button type="submit" disabled={disable}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
