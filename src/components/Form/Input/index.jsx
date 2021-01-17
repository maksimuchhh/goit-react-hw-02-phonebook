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
    return (
      <>
        <label htmlFor={name}>{name}</label>
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
