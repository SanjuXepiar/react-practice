import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cartList">
      <h3>Total items in Cart: {cart.length}</h3>
      {cart.map((item) => {
        const { id, image, name, price } = item;

        return (
          <div className="cartItem">
            <img key={id} src={image} alt={name} />
            <br />
            <div className="footer">
              <h4> {name}</h4>
              <span> Qt.{item.quantity}</span>
              <span> Rs.{price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
