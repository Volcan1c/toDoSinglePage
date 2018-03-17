import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
    render() {
        return (
            <div className = "nav-bar">
                <h1 className="nav-title">RecipeApp</h1>
                <div className="nav-options">
                    <span>New Recipe</span>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact Us</span>
                </div>
            </div>
        )
    }
}

export default Navbar;