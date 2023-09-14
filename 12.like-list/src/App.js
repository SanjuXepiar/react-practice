import "./App.css";
import Data from "./component/Data";
import { FaThumbsUp } from "react-icons/fa";
import React, { useState } from "react";

function App() {
  const [likedItems, setLikedItems] = useState({});
  const handleLike = (item) => {
    setLikedItems((prevLikedItems) => ({
      ...prevLikedItems,
      [item.id]: !prevLikedItems[item.id],
    }));
  };

  return (
    <div className="App">
      {Data.map((item) => {
        return (
          <div key={item.id}>
            <h3>
              {item.text}
              <span
                key={item.id}
                onClick={() => handleLike(item)}
                style={{
                  color: likedItems[item.id] && "blue",
                  cursor: "pointer",
                }}
              >
                <FaThumbsUp />
              </span>
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
