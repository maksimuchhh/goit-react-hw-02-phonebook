import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

export default class Form extends Component {
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
    const { addContact } = this.props;
    return (
      <form
        onSubmit={(evt) => {
          return addContact(evt, this.state);
        }}
      >
        <Input name="name" changeInput={this.changeInput} />
        <Input name="number" changeInput={this.changeInput} />
        <Button state={this.state} text="Add contact" addContact={addContact} />
      </form>
    );
  }
}
