import React, {Component} from "react";
import "./Block.css";

class Block extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.clicked(this.props.color, this.props.shown, this.props.index);
    }
    render() {
        const {color, shown} = this.props;
        if (shown) {
            return <button className = "block-box" style = {{backgroundColor: color}} onClick = {this.handleClick}></button>;
        }
        return <button className = "block-box" style = {{backgroundColor: "black"}} onClick = {this.handleClick}></button>;
    }
}

export default Block;