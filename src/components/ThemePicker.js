import React, { Component } from "react";
import api from "./api";

class ThemePicker extends Component {
  constructor() {
    super();
    this.state = {
      api: api,
      themes: []
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <div className="ThemePicker">
        <label htmlFor="ThemePicker">Select A Card Theme</label>
        {this.props.themes.map((theme) => {
          return (
            <div className="theme-picker">
              <button onChange={this.handleChange} value={theme} id={theme}>
                {theme}
              </button>
              <label htmlFor={theme} />
            </div>
          );
        })}
      </div>
    );
  }
}
export default ThemePicker;
