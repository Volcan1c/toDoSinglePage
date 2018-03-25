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
    this.state = {
      colors: this.newColors(), 
      shown: this.props.showArr,
      lastClickedColor: "",
      lastClickedIndex: -1
    };
    this.newColors = this.newColors.bind(this);
    this.newGame = this.newGame.bind(this);
    this.clicked = this.clicked.bind(this);
    //this.newGame();
  }
  
  clicked(color, shown, index) {
    const tempState = Object.assign(this.state);
    if (this.state.lastClickedColor === "") {
      tempState.shown[index] = true;
      tempState.lastClickedColor = color;
      tempState.lastClickedIndex = index;
      this.setState(tempState);
    } else if (this.state.lastClickedColor === color) {
      tempState.shown[index] = true;
      tempState.lastClickedColor = "";
      this.setState(tempState);
    } else {
      tempState.lastClickedColor = "";
      tempState.shown[index] = false;
      tempState.shown[this.state.lastClickedIndex] = false;
      this.setState(tempState);
    }
  }
  
  newGame() {
    this.setState({colors: this.newColors(), shown: this.hiddenArr(), lastClickedColor: "", lastClickedIndex: -1});
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
        <Navbar onNewGame = {this.newGame}/>
        <BlockList colors = {this.state.colors} shown = {this.state.shown} clicked = {this.clicked}/>
      </div>
    );
  }
}

export default App;
