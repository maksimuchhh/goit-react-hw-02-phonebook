import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Button from "../Form/Button";
const List = ({ contacts, filter, deleteContact }) => {
  if (filter.length > 0) {
    contacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
  return (
    <ul>
      {contacts.map((el) => {
        const id = uuidv4();
        return (
          <li key={id}>
            <span>{el.name}</span>: <span>{el.number} </span>
            <Button deleteContact={deleteContact} text="Delete" />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  names: PropTypes.arrayOf(PropTypes.object),
};

export default List;
