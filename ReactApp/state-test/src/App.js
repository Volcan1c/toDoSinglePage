import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {favColor: "red"};
    setTimeout(() => {
      this.setState({favColor: "blue"})
      console.log(this.state.favColor) //gets logged after the timeout ends -> blue
    },5000);
    console.log(this.state.favColor)//gets logged instantly -> red
  }
  render() {
    return (
      <div className="App">
        My favorite color is:
        {this.state.favColor}
      </div>
    );
  }
}

export default App;
