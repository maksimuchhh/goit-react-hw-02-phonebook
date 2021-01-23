import React, { Component } from "react";
import Section from "./components/Section";
import Input from "./components/Form/Input";
import Form from "./components/Form";
import List from "./components/List";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";

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
      const idOfEl = evt.target.id;
      prevState.contacts.find((el, index, arr) => {
        if (el.id === idOfEl) {
          arr.splice(index, 1);
          return true;
        } else {
          return false;
        }
      });
      return {
        ...prevState,
        contacts: [...prevState.contacts],
      };
    });
  };

  addContact = (evt, state) => {
    console.log(this.state);
    evt.preventDefault();
    this.setState((prevState) => {
      const id = uuidv4();
      const name = state.name;
      const number = state.number;
      if (!name) return;
      const dublicated = prevState.contacts.find((el) => {
        return el.name === name;
      });
      if (!(dublicated === undefined)) {
        alert(`You already add ${name}`);
        return;
      } else {
        return {
          ...prevState,
          contacts: [
            ...prevState.contacts,
            {
              id: id,
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
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact} />
        {this.state.contacts.length > 0 && (
          <Section title="Contacts">
            <Input name="filter" changeInputForFilter={this.changeInput} />
            <List
              contacts={this.state.contacts}
              filter={this.state.filter}
              deleteContact={this.deleteContact}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
