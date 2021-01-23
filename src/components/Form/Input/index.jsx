import React, { Component } from "react";

export class Input extends Component {
  render() {
    const { name, changeInputForFilter, changeInput } = this.props;
    const arr = [...name];
    arr.splice(0, 1, arr[0].toUpperCase());
    return (
      <>
        <label htmlFor={name}>{arr}</label>
        <input
          onChange={name === "filter" ? changeInputForFilter : changeInput}
          type="text"
          id={name}
        />
      </>
    );
  }
}

export default Input;
