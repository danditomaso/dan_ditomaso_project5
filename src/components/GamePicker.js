import React, { Component } from "react";
import api from "./api";
import ThemePicker from "./ThemePicker";

class GamePicker extends Component {
  constructor() {
    super();
    this.state = {
      api: api,
      currentAPI: api.simpsons.url,
      difficulty: "medium",
      name: "",
      themes: []
    };
  }
  // myInput = React.createRef();

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  gotoGame = (e) => {
    e.preventDefault();
    this.props.history.push(`/game/`);
  };

  updateThemePickerOptions = () => {
    const formattedTheme = Object.entries(this.state.api);
    this.setState({
      themes: Object.keys(this.state.api)
    });
  };

  componentDidMount() {
    this.updateThemePickerOptions();
  }

  render() {
    return (
      <div className="GamePicker">
        <h1>Welcome to the Memory Game!</h1>

        <form action="" className="GamePicker-Form" onSubmit={this.gotoGame}>
          <label htmlFor="name">Enter Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label htmlFor="easy" />
          <input
            type="radio"
            name="difficulty"
            id="easy"
            value="easy"
            onChange={this.handleChange}
          />
          <label htmlFor="medium" />
          <input
            type="radio"
            name="difficulty"
            id="medium"
            value="medium"
            checked
            onChange={this.handleChange}
          />
          <label htmlFor="hard" />
          <input
            type="radio"
            name="difficulty"
            id="hard"
            value="hard"
            onChange={this.handleChange}
          />
          <ThemePicker themes={this.state.themes} />
          <label htmlFor="gameSubmit">Lets Go!</label>
          <button type="submit" id="gameSubmit" />
        </form>
      </div>
    );
  }
}

export default GamePicker;
