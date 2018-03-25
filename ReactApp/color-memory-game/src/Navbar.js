import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
        <header>
            <h2><a>Memory Game</a></h2>
            <nav>
                <li><a onClick = {this.props.onNewGame}>New Game</a></li>
            </nav>
        </header>
        );
    }
}

export default Navbar;