import React, { Component } from "react";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state={
      itemTitle : this.props.itemTitle,
      price : this.props.price
    }
  }
  render() {
    return (
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.itemTitle}</h3>
              <h4>Cost: {this.props.price}</h4>
            </div>
          </div>
        </div>
    );
  }
}

export default CartItem;
