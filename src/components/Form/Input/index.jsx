import React, { Component } from "react";

export class Input extends Component {
  state = {
    name: "",
    number: "",
  };
  changeInput = (evt) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [evt.target.id]: evt.target.value,
      };
    });
  };
  render() {
    const { name, changeInput } = this.props;
    const arr = [...name];
    arr.splice(0, 1, arr[0].toUpperCase());
    return (
      <>
        <label htmlFor={name}>{arr}</label>
        <input
          onChange={name === "filter" ? changeInput : this.changeInput}
          type="text"
          id={name}
        />
      </>
    );
  }
}

export default Input;
