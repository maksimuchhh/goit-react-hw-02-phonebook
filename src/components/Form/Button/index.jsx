import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, deleteContact }) => {
  return (
    <>
      <button onClick={deleteContact ? deleteContact : null} type="submit">
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
