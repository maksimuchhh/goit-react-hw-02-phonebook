import React, { Component } from "react";
import Section from "./components/Section";
import Input from "./components/Form/Input";
import Button from "./components/Form/Button";
import List from "./components/List";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  changeInput = (evt) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [evt.target.id]: evt.target.value,
      };
    });
  };
  deleteContact = (evt) => {
    this.setState((prevState) => {
      const name = evt.target.parentElement.children[0].textContent;
      prevState.contacts.find((el, index, arr) => {
        if (el.name === name) {
          arr.splice(index, 1);
          console.log("ME!");
          return true;
        } else {
          console.log("Error!!!");
          return false;
        }
      });
      return {
        ...prevState,
        contacts: [...prevState.contacts],
      };
    });
  };
  addContact = (evt) => {
    evt.preventDefault();
    this.setState((prevState) => {
      console.log(this.state.contacts);
      const name = evt.target.parentElement.children[1].value;
      const number = evt.target.parentElement.children[3].value;
      if (!name) return;
      const dublicated = this.state.contacts.find((el) => {
        if (el.name === name) return true;
        else {
          return false;
        }
      });
      console.log(dublicated);
      if (!dublicated === undefined) {
        alert(`You already add ${name}`);
        return;
      } else {
        return {
          ...prevState,
          contacts: [
            ...prevState.contacts,
            {
              name: name,
              number: number,
            },
          ],
        };
      }
    });
  };
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <Section title={null}>
          <Input name="name" />
          <Input name="number" />
          <Button text="Add contact" addContact={this.addContact} />
        </Section>
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Input name="filter" changeInput={this.changeInput} />
            <List
              contacts={this.state.contacts}
              filter={this.state.filter}
              deleteContact={this.deleteContact}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
