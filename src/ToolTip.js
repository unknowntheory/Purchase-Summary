import React from "react";

function ToolTip(props) {
  return (
    <div className="toolTipOverlay" onClick={props.overLayClick}>
      <div className="tooltip">
        <div className="toolTipDialog">
          Picking up your order from the store helps cut costs, and we pass the
          saving downt to you
        </div>
      </div>
    </div>
  );
}
export default ToolTip;
