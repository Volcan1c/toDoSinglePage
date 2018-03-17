import React, {Component} from 'react';
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
        // const {title,instructions,img} = this.props;
        // const ingredients = this.props.ingredients.map((ing, ind) => {
        //     return <li key = {ind}>{ing}</li>;
        // });
        return(
            <div className="recipe-list">
                {this.props.recipes.map((rec, index) => {
                    const ingredients = rec.ingredients.map((ing, ind) => {
                        return <li key = {ind}>{ing}</li>;
                    });
                    return <div className="recipe-card">
                        <div className="recipe-card-image">
                            <img src={rec.img} alt={rec.title} />
                        </div>
                        <div className="recipe-card-content">
                            <h3 className="recipe-title"> Recipe {rec.title} </h3>
                            <h4> Ingredients: </h4>
                            <ul> {ingredients} </ul>
                            <h4> Instructions: </h4>
                            <p> {rec.instructions} </p>
                        </div>
                    </div>;
                })}
            </div>
        );
    }
}

export default RecipeList;

