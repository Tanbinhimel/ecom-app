import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <div className="display-2">
        cart
        <span className="badge badge-pill badge-primary small">
          {cart.length}
        </span>
      </div>

      {cart.map((product) => (
        <div className="row">
          <div className="col">
            <p className="">{product.productName}</p>
          </div>
          <div className="col">
            <p className="">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
