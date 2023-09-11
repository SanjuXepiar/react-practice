// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <div
        className={`defualt-style ${
          show ? "active-toast-position" : "inactive-toast-position"
        }`}
      >
        I am todo bahi
        <br />
        <button onClick={() => setShow(false)}>Hide</button>
      </div>
      <button onClick={() => setShow(true)}>
        {show ? "HideToast" : "Show Toast"}
      </button>
    </div>
  );
}

export default App;
