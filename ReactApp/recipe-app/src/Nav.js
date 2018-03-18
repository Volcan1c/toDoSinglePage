import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
    render() {
        return (
            <header>
                <h2><a>RecipeApp</a></h2>
                <nav>
                    <li><a>New Recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact Us</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;