import "./App.css";
import React, { useState } from "react";
function App() {
  const [alert, setAlert] = useState("");
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    if (e.target.value.length <= 30) {
      setInput(e.target.value);
    }
    if (e.target.value.length >= 30) {
      setAlert("you have exceed the limit");
      setTimeout(() => {
        setAlert("");
      }, 1000);
    }
  };
  return (
    <div className="App">
      {alert}
      <div className="textArea">
        <textarea rows={10} cols={40} maxLength={30} onChange={handleChange} />
        {input.length}/300
      </div>
    </div>
  );
}

export default App;
