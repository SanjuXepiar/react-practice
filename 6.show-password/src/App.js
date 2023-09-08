import "./App.css";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <h1>show Password</h1>

      <br />
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Password" : "Show Password"}
      </button>
    </div>
  );
}

export default App;
