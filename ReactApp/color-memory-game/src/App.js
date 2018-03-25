import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar.js";
import BlockList from "./BlockList.js";

class App extends Component {
  static defaultProps = {
    colorArr: ["red","orange","blue","yellow","brown","grey","purple","green","red","orange","blue","yellow","brown","grey","purple","green"],
    showArr: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
  }
  
  constructor(props) {
    super(props);
    this.state = {colors: this.newColors(), shown: this.props.showArr};
    this.newColors = this.newColors.bind(this);
    this.newGame = this.newGame.bind(this);
    this.clicked = this.clicked.bind(this);
    //this.newGame();
  }
  
  clicked(color, shown, index) {
    const tempState = Object.assign(this.state);
    tempState.shown[index] = true;
    this.setState(tempState);
  }
  
  newGame() {
    this.setState({colors: this.newColors(), shown: this.hiddenArr()});
  }
  
  hiddenArr() {
    return [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
  }
  
  newColors() {
    let randArray = this.props.colorArr;
    let temp = "";
    for (let i = 0; i < randArray.length; i++) {
      var randIndex = Math.floor(Math.random()*randArray.length);
      temp = randArray[i];
      randArray[i] = randArray[randIndex];
      randArray[randIndex] = temp;
    }
    return randArray;
  }
  
  render() {
    return (
      <div>
        <Navbar />
        <BlockList colors = {this.state.colors} shown = {this.state.shown} clicked = {this.clicked}/>
      </div>
    );
  }
}

export default App;
