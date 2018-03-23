import React, {Component} from 'react';
import Recipe from "./Recipe";
import "./RecipeList.css";

class RecipeList extends Component {
    render() {
        const recipes = this.props.recipes.map(r => (
          <Recipe key={r.id} {...r} onDelete = {this.props.onDelete}/>
        ));
        
        return (
          <div className="recipe-list">
            {recipes}
          </div>
        );
    }
}

export default RecipeList;

