import React from "react";

function Total(props) {
  return (
    <div className="totalContainer">
      <span className="totalTitle">Est. Total</span>
      <span className="totalPrice">${props.total}</span>
    </div>
  );
}

export default Total;
