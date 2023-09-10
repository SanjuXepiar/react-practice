import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cartList">
      {cart.map((item) => {
        const { id, image, name, price } = item;
        return (
          <div className="cartItem">
            <img key={id} src={image} alt={name} />
            <br />
            <div className="footer">
              <h4> {name}</h4>

              <span> Rs.{price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
