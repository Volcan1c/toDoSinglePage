import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from "./RecipeList";
import Navbar from "./Nav.js";

class RecipeApp extends Component {
  render() {
    return (
      <div className="App"> 
        <Navbar />
        <RecipeList 
          title="Pasta" 
          ingredients={["flour", "water"]}
          instructions="Mix ingredients"
          img="pasta.jpg"
        />
      </div>
    );
  }
}

export default RecipeApp;
