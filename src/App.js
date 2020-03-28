/* Objective

Create a <div> box with an onClick handle event that changes the background color when clicked. 
When the box is clicked, we want a clickCounter indicating how many times it was clicked. 
We want the box color to toggle back to it's original color! (Hint: create a toggle function) */

import React, { Component } from 'react'
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'blue',
      clickCounter: 0
    }
  }

  onChange = (e) => {
    this.setState({
      clickCounter: this.state.clickCounter + 1,
       function(){
         if(this.state.clickCounter % 2 === 0) {
           this.state.color = 'blue'
           console.log(this.state.color, "blue")
         } else {
           this.state.color = 'orange'
           console.log(this.state.color, 'orange')
         }
       }
    })
    console.log("click counter ===> ", this.state.clickCounter)
  }

  render() {
    return (
      <div className="App">
        <h1> Box color change {this.state.clickCounter} </h1>
        <div              className="colorBox"
        style={{backgroundColor: this.state.color}}
        onClick={this.onChange}
        >
        <p>Click Here</p>
        </div>
      </div>
    )
  }
}