import React, {Component} from "react";
import "./BlockList.css";
import Block from "./Block.js";

class BlockList extends Component {
    render() {
        const {colors, shown, clicked} = this.props;
        return (
            colors.map((color, index) => {return <Block color = {color} shown = {shown[index]} clicked = {clicked} key = {index} index = {index}/>})
        );
    }
}

export default BlockList;