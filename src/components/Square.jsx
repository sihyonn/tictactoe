import React, { Component } from "react";
import "../style/Square.css";

export default class Square extends Component {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}
