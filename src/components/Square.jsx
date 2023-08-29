import React, { Component } from "react";
import "../style/Square.css";

export default class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.props.value}
      </button>
    );
  }
}
