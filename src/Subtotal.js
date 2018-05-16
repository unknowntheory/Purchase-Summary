import React from "react";
function Subtotal(props) {
  function sumSubTotal(items) {
    return items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }
  return (
    <div className="priceContainer">
      <span className="subTotalTitle">Subtotal</span>
      <span className="subTotalPrice">${props.subTotalPrice}</span>
    </div>
  );
}
export default Subtotal;
