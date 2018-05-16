import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./main.css";
import items from "./dummyData.js";
import Subtotal from "./Subtotal";
import Pickup from "./Pickup";
import Taxes from "./Taxes";
import Zip from "./Zip";
import Total from "./Total";
import ItemDetails from "./ItemDetails";
import AddPromo from "./AddPromo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: items,
      subTotal: 0,
      puSavings: 3,
      collapsed: true,
      promoClicked: false
    };
    this.activate = this.activate.bind(this);
    this.calcDist = this.calcDist.bind(this);
    this.addPromoClick = this.addPromoClick.bind(this);
  }
  sumSubTotal(items) {
    return items.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
  }

  getTaxes(items) {
    return this.sumSubTotal(items) * 0.1;
  }
  total(items) {
    return (
      this.sumSubTotal(items) + this.getTaxes(items) - this.state.puSavings
    );
  }
  calcDist() {
    return `${this.state.items.length * 180}px`;
  }
  activate() {
    const px = this.calcDist();
    console.log("in here?", this.state.collapsed);
    return this.state.collapsed ? "229px" : px; // change to px
  }
  turn() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  addPromoClick() {
    this.setState({ promoClicked: !this.state.promoClicked });
  }

  render() {
    const style = { height: this.activate() };
    const List = this.state.items.map(item => <ItemDetails items={item} />);
    const isClicked = this.state.promoClicked;
    const isPromoClicked = isClicked ? (
      <span className="minusSymbol">-</span>
    ) : (
      <span className="plusSymbol">+</span>
    );
    return (
      <div className="container" style={style}>
        <div className="top">
          <Subtotal subTotalPrice={this.sumSubTotal(this.state.items)} />
          <Pickup pickUpSavings={this.state.puSavings} />
          <Taxes taxes={this.getTaxes(this.state.items)} />
          <Zip />
        </div>
        <div className="mid">
          <Total total={this.total(this.state.items)} />
        </div>
        <div className="bottom">
          <button className="itemDetailsButton" onClick={this.turn.bind(this)}>
            See item details
          </button>
          {this.state.collapsed === false ? List : null}
          <AddPromo
            addPromoClick={this.addPromoClick}
            isPromoClicked={isPromoClicked}
            isClicked={isClicked}
          />
        </div>
      </div>
    );
  }
}

// function Subtotal(props) {
//   function sumSubTotal(items) {
//     return items.reduce((acc, item) => {
//       return acc + item.price;
//     }, 0);
//   }
//   return (
//     <div className="priceContainer">
//       <span className="subTotalTitle">Subtotal</span>
//       <span className="subTotalPrice">{props.subTotalPrice}</span>
//     </div>
//   );
// }

// class Pickup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       click: false
//     };
//     this.onClick = this.onClick.bind(this);
//   }
//   onClick() {
//     this.setState({ click: !this.state.click });
//   }
//   render() {
//     return (
//       <div className="pickUpContainer">
//         <span className="pickUpTitle">
//           <button className="pickUpSavingsButton" onClick={this.onClick}>
//             Pickup savings
//           </button>
//         </span>
//         <span className="pickUpPrice">{this.props.pickUpSavings}</span>
//         <div>
//           {this.state.click === true ? (
//             <ToolTip overLayClick={this.onClick} />
//           ) : null}
//         </div>
//       </div>
//     );
//   }
// }

// function ToolTip(props) {
//   return (
//     <div className="toolTipOverlay" onClick={props.overLayClick}>
//       <div className="tooltip">
//         <div className="toolTipDialog">
//           Picking up your order from the store helps cut costs, and we pass the
//           saving downt to you
//         </div>
//       </div>
//     </div>
//   );
// }

// function Taxes(props) {
//   return (
//     <div className="taxesContainer">
//       <span className="taxesTitle">Est. taxes & fees</span>
//       <span className="taxesPrice">{props.taxes}</span>
//     </div>
//   );
// }
// function Zip(props) {
//   return (
//     <div className="zipContainer">
//       <span className="zipTitle">(Based on 94085)</span>
//     </div>
//   );
// }
// mid
// function Total(props) {
//   return (
//     <div className="totalContainer">
//       <span className="totalTitle">Est. Total</span>
//       <span className="totalPrice">{props.total}</span>
//     </div>
//   );
// }
// function ItemDetails(props) {
//   console.log("items", items);
//   return (
//     <div className="itemCon">
//       <img className="itemImg" src={props.items.pic} />
//       <p className="itemDesc">{props.items.itemName}</p>
//       <div className="priceQty">
//         <span className="idPrice">{props.items.price}</span>
//         <span className="idQty">{props.items.qty}</span>
//       </div>
//     </div>
//   );
// }

// bottom
// class AddPromo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       promoClicked: false
//     };
//     this.addPromoClick = this.addPromoClick.bind(this);
//   }
//   addPromoClick() {
//     this.setState({ promoClicked: !this.state.promoClicked });
//   }

//   render() {
//     const isClicked = this.state.promoClicked;
//     const isPromoClicked = isClicked ? (
//       <span className="minusSymbol">-</span>
//     ) : (
//       <span className="plusSymbol">+</span>
//     );

//     return (
//       <div className="addPromoContainer">
//         <button className="addPromoButton" onClick={this.addPromoClick}>
//           <span className="addPromoTitle">Apply promo code</span>
//           {isPromoClicked}
//         </button>
//         <div>{this.state.promoClicked ? <AddPromoInformation /> : null}</div>
//       </div>
//     );
//   }
// }
// class AddPromoInformation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       promoInfo: ""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ promoInfo: event.target.value });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         Promo:
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input
//               className="addPromoInput"
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>
//           <input className="addPromoInputButton" type="submit" value="Apply" />
//         </form>
//       </div>
//     );
//   }
// }

render(<App />, document.getElementById("root"));
