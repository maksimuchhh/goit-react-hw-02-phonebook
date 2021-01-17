import React from "react";
import PropTypes from "prop-types";

const index = ({ text, addContact, deleteContact }) => {
  return (
    <>
      <button onClick={text === "Delete" ? deleteContact : addContact}>
        {text}
      </button>
    </>
  );
};

index.propTypes = {
  text: PropTypes.string,
};

export default index;
