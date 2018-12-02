import React, { Component } from "react";
// import Card from "./Card";
import ReactCardFlip from "react-card-flip";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

class GameBoard extends Component {
  constructor() {
    // console.log("the constructor was called");
    super();
    this.state = {
      isShow: true,
      isFlipped: false
    };
  }

  // handleClick = (e) => {
  //   console.log("i'm clicking");
  //   // this.setState({
  //   // [e.target.id]: e.target.value
  //   // });
  // };

  handleClick(e) {
    e.preventDefault();
    console.log("test");
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <div className="GameBoard">
        {this.props.cardImage.map((card, i) => {
          return (
            <div className="card">
              <ReactCardFlip isFlipped={this.state.isFlipped}>
                <CardFront key="front" onClick={this.handleClick} />
                <CardBack
                  key="back"
                  cardImage={this.props.cardImage[i].image}
                  altText={this.props.cardImage[i].character}
                />
              </ReactCardFlip>
            </div>
          );
        })}
      </div>
    );
  }
}
export default GameBoard;
