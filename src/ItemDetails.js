import React from "react";

function ItemDetails(props) {
  return (
    <div className="itemCon">
      <img className="itemImg" src={props.items.pic} />
      <p className="itemDesc">{props.items.itemName}</p>
      <div className="priceQty">
        <span className="idPrice">{props.items.price}</span>
        <span className="idQty">{props.items.qty}</span>
      </div>
    </div>
  );
}

export default ItemDetails;
