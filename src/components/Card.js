import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      // isFlipped: false
    };
  }

  render(event) {
    // console.log(this.props);
    return (
      <div className="card" onClick={this.props.click} id={this.props.id}>
        <div className="front" id={this.props.id}>
          ?
        </div>
        <div className="back" id={this.props.id}>
          <img className="card-image" src={this.props.cardImage} />
        </div>
      </div>
    );
  }
}
export default Card;
