import React, { Component } from "react";
import "./App.css";
import axios from "axios";

// COMPONENTS
import api from "./components/api";
import Header from "./components/Header";
import Card from "./components/Card";
// import firebase from "./components/firebase";
// import Score from "./components/Score";
// import Timer from "./components/Timer";
import Footer from "./components/Footer";
import * as util from "./components/helpers";

class App extends Component {
  constructor() {
    super();
    this.state = {
      api: api,
      gameTitle: "Memory Game",
      currentAPI: api.simpsons.url,
      score: 0,
      timer: 0,
      isShowing: true,
      cards: [],
      shuffledCards: [],
      numOfRequestedImages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      solvedCards: [],
      flippedCards: []
    };
  }

  getCardImages = async () => {
    const promiseArray = this.state.numOfRequestedImages.map((item) =>
      axios.get(this.state.currentAPI)
    );
    try {
      const cards = (await Promise.all(promiseArray)).map((res) => res.data);
      console.log(cards);
      this.setState({ cards });
      this.shuffleCards();
    } catch (error) {
      console.error(error);
    }
  };

  shuffleCards = () => {
    let cardsArr = Array.from(this.state.cards);
    console.log(this.state.cards);
    cardsArr = cardsArr.concat(cardsArr);
    const flattenedArr = util.flattenArr(cardsArr);
    this.setState({ shuffledCards: util.randomizeArray(flattenedArr) });
  };

  checkForMatch = (cardId) => {
    if (this.state.flippedCards.length !== 1) {
      this.setState({
        flippedCards: this.state.shuffledCards[cardId]
      });
    } else {
      console.log("push");
    }
  };

  checkForSolved = (cardId) => {};

  handleClick = (event) => {
    event.preventDefault();
    const cardId = event.target.id;
    console.log(event.target.id);
    if (this.state.flippedCards.length === 2) {
      console.log("hit timeout");
      setTimeout(() => {
        this.checkForMatch(cardId);
      }, 800);
    }
  };
  componentDidMount() {
    this.getCardImages();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header title={this.state.gameTitle} />
        </header>
        <div className="GameBoard">
          {this.state.shuffledCards.map((card, index) => {
            return (
              <Card
                id={index}
                name={card.character}
                click={this.handleClick}
                flipped={this.state.shuffledCards.includes([
                  this.state.flippedCards
                ])}
                image={card.image}
                // close={this.checkForMatch}
                // solved={this.checkSolved}
              />
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
