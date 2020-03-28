/* Objective

Create a <div> box with an onClick handle event that changes the background color when clicked. 
When the box is clicked, we want a clickCounter indicating how many times it was clicked. 
We want the box color to toggle back to it's original color! (Hint: create a toggle function) */

import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "blue",
      clickCounter: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    let stateOfClicks = this.state.color;

    function toggleColor() {
      if (stateOfClicks.clickCounter % 2 === 0) {
        this.setState({ color: "blue" });
        console.log(stateOfClicks.color, "blue");
      } else {
        this.setState({ color: "orange" });
        console.log(stateOfClicks.color, "orange");
      }
    }
    toggleColor();

    this.setState({
      clickCounter: this.state.clickCounter + 1
    });
    console.log("click counter ===> ", this.state.clickCounter);
  };

  render() {
    return (
      <div className="App">
        <h1> Box color change {this.state.clickCounter} </h1>
        <div
          className="colorBox"
          style={{ backgroundColor: this.state.color }}
          onClick={() => {
            this.onChange();
          }}
        >
          <p>Click Here</p>
        </div>
      </div>
    );
  }
}
