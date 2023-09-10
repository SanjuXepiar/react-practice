// import logo from "./logo.svg";
import "./App.css";
import data from "./Data";
import Cart from "./Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const handleAddCart = (item) =>
    setCart((prev) => {
      return [...prev, item];
    });
  return (
    <div className="App">
      <section className="list">
        <div className="main-title">
          <h2 style={{ textTransform: "capitalize" }}> select the product</h2>
        </div>
        <div className="listedItems">
          {data.map((item) => {
            const { id, name, price, image } = item;
            return (
              <article className="item">
                <div className="item image">
                  <img key={id} src={image} alt={name} />
                  <br />
                  <div className="footer">
                    <h4> {name}</h4>
                    <button onClick={() => handleAddCart(item)}>
                      Add to Cart
                    </button>
                    <span> Rs.{price}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div className="underline"></div>
      </section>
      <section className="cart">
        <Cart cart={cart} />
      </section>
    </div>
  );
}

export default App;
