import React, {Component} from 'react';
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
      static defaultProps = {
          recipes: [{
            title: "Pasta",
            ingredients: ["flour", "water"],
            instructions: "Mix ingredients",
            img: "pasta.jpg"
          },{
            title: "Steak",
            ingredients: ["Meat", "Salt"],
            instructions: "Salt the steak and cook",
            img: "steak.jpg"
          },{
            title: "Burger",
            ingredients: ["Buns", "Patty"],
            instructions: "Get the patty in the buns",
            img: "burger.jpg"
          }]
      }
    render() {
        const recipes = this.props.recipes.map((r,index) => (
          <Recipe key={index} {...r} />
        ));
        
        return (
          <div className="recipe-list">
            {recipes}
          </div>
        );
    }
}

export default RecipeList;

