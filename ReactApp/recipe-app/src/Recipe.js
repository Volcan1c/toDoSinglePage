import React, {Component} from 'react';
import "./Recipe.css";

class Recipe extends Component {
    render() {
        const {title} = this.props;
        const ingredients = this.props.ingredients.map((ing, ind) => {
            return <li key = {ind}>{ing}</li>;
        });
        return(
            <div>
                <div> Recipe {title} </div>
                <ul> {ingredients} </ul>
            </div>
        );
    }
}

export default Recipe;

