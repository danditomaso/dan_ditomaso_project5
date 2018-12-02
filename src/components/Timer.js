import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    console.log("the constructor was called");
    super();
    this.state = {};
  }
  render() {
    return (
      <AppProvider>
        <div>
          <h1>Hello</h1>
        </div>
      </AppProvider>
    );
  }
}

export default Timer;
