import React, { Component } from "react";
import "./Pet.css";

class HobbyList extends React.Component {
    render() {
        const hobbies = ["World Domination", "Sleep", "Drink Milk"];
        const style1 = {fontSize: "1.5em"};
        return(
            <ul>
                {hobbies.map((h, ind) => {
                    return <li key={ind} style={style1}>{h}</li>
                })}
            </ul>
        );
    }
}

export default HobbyList;