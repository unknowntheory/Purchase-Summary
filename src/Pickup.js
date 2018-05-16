import React from "react";
import ToolTip from "./ToolTip";
class Pickup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ click: !this.state.click });
  }
  render() {
    return (
      <div className="pickUpContainer">
        <span className="pickUpTitle">
          <button className="pickUpSavingsButton" onClick={this.onClick}>
            Pickup savings
          </button>
        </span>
        <span className="pickUpPrice">-${this.props.pickUpSavings}</span>
        <div>
          {this.state.click === true ? (
            <ToolTip overLayClick={this.onClick} />
          ) : null}
        </div>
      </div>
    );
  }
}
export default Pickup;
