import React from "react";
function Taxes(props) {
  return (
    <div className="taxesContainer">
      <span className="taxesTitle">Est. taxes & fees</span>
      <span className="taxesPrice">${props.taxes}</span>
    </div>
  );
}
export default Taxes;
