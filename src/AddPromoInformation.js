import React from "react";

class AddPromoInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promoInfo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ promoInfo: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        Promo:
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              className="addPromoInput"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input className="addPromoInputButton" type="submit" value="Apply" />
        </form>
      </div>
    );
  }
}
export default AddPromoInformation;
