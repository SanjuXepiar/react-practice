import "./App.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
function App() {
  const [tab, setTab] = useState("tab1");

  const changeTab = (type) => {
    setTab(type);
  };

  return (
    <div className="App">
      <h1>Switch Tabs</h1>
      <button
        onClick={() => changeTab("tab1")}
        style={{ background: tab === "tab1" ? "orange" : "" }}
      >
        Switch tab
      </button>
      <button
        onClick={() => changeTab("tab2")}
        style={{ background: tab === "tab2" ? "orange" : "" }}
      >
        Switch tab
      </button>
      {tab === "tab1" && <Profile />}
      {tab === "tab2" && <Home />}
    </div>
  );
}

export default App;
