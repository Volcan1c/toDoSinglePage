import React, { Component } from "react";
import "./Pet.css";
import HobbyList from "./Hobbies.js";

class Pet extends Component {
    render() {
        const style1 = {fontSize: "1.5em"};
        return(
        <div className = "card">
            <h2 className = "name">Cat</h2>
            <img src = "https://patiliyo.com/wp-content/uploads/2017/07/ruyada-kedi-gormek.jpg" alt = "a cat"/>
            <h5 style = {{fontSize: "2em", margin: "2px"}}>Hobbies:</h5>
            <HobbyList />
        </div>
        );
    }
}

export default Pet;