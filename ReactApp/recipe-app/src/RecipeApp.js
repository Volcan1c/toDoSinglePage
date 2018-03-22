import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from "./RecipeList";
import Navbar from "./Nav.js";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        id: 1,
        title: "Pasta",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "pasta.jpg"
      },{
        id: 2,
        title: "Steak",
        ingredients: ["Meat", "Salt"],
        instructions: "Salt the steak and cook",
        img: "steak.jpg"
      },{
        id: 3,
        title: "Burger",
        ingredients: ["Buns", "Patty"],
        instructions: "Get the patty in the buns",
        img: "burger.jpg"
      }],
      nextRecipeID: 3,
    };
  }
  render() {
    return (
      <div className="App"> 
        <Navbar />
        <RecipeList 
          recipes = {this.state.recipes}
        />
      </div>
    );
  }
}

export default RecipeApp;
