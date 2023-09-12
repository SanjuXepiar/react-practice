import "./App.css";
import React, { useState } from "react";
function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [alert, setAlert] = useState("");

  // ..
  const addItem = () => {
    if (input.length === 0) {
      setAlert("Input Cannot be Empty");
    }
    const task = {
      id: Math.random(),
      item: input,
      strike: false,
    };
    setTodo([...todo, task]);
    setInput("");
  };
  setTimeout(() => {
    setAlert("");
  }, 1000);
  // ......
  const strikeThrough = (task) => {
    const updatedItem = todo.map((todeStrike) => {
      if (todeStrike.id === task.id) {
        return {
          ...todeStrike,
          strike: !task.strike,
        };
      }
      return todeStrike;
    });
    setTodo(updatedItem);
  };

  // ..............
  return (
    <div className="App">
      <main>
        <h3>Todo Strike--Through</h3>
        <p>{alert}</p>
        <div className="input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="addItem" onClick={addItem}>
            Add Item
          </button>
        </div>
      </main>
      <div className="underline"></div>
      <section>
        <div className="todoList">
          {todo.map((task) => (
            <div key={task.id}>
              <h3
                onClick={() => strikeThrough(task)}
                style={{
                  textDecorationLine: task.strike && "line-through",
                  cursor: "pointer",
                }}
              >
                {task.item}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
