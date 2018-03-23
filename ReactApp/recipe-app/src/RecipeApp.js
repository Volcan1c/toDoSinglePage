import React, { Component } from 'react';
import './RecipeApp.css';
import RecipeList from "./RecipeList";
import Navbar from "./Nav.js";
import RecipeInput from "./RecipeInput.js"

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{
        id: 0,
        title: "Pasta",
        ingredients: ["flour", "water"],
        instructions: "Mix ingredients",
        img: "pasta.jpg"
      },{
        id: 1,
        title: "Steak",
        ingredients: ["Meat", "Salt"],
        instructions: "Salt the steak and cook",
        img: "steak.jpg"
      },{
        id: 2,
        title: "Burger",
        ingredients: ["Buns", "Patty"],
        instructions: "Get the patty in the buns",
        img: "burger.jpg"
      }],
      nextRecipeID: 3,
      showForm: false
    };
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeID};
      return {
        nextRecipeID: prevState.nextRecipeID + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      };
    });
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App"> 
        <Navbar onNewRecipe = {() => this.setState({showForm: true})}/>
        { showForm ? <RecipeInput onSave = {this.handleSave} onClose = {() => this.setState({showForm: false})}/> : null }
        <RecipeList recipes = {this.state.recipes} onDelete = {this.onDelete}/>
      </div>
    );
  }
}

export default RecipeApp;
