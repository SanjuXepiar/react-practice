// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
function App() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [alert, setAlert] = useState("");
  const handleCheck = (e) => {
    e.preventDefault();
    for (let i = 0; i < input1.length; i++) {
      if (input1[i] !== input2[i]) {
        setAlert("password doesnot match");
      } else {
        setAlert("password match");
      }
    }
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };
  return (
    <div className="App">
      <main>
        <p>{alert}</p>
        <form onSubmit={handleCheck}>
          <div className="content">
            <label htmlFor="password">Password:</label>
            <input type="text" onChange={(e) => setInput1(e.target.value)} />
          </div>
          <br />
          <div className="content">
            <label htmlFor="caheckPassword">Confirm Password:</label>
            <input type="text" onChange={(e) => setInput2(e.target.value)} />
          </div>
          <br />
          <button type="submit">submit</button>
        </form>
      </main>
    </div>
  );
}

export default App;
