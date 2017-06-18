import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  const { text, finish, status } = props;
  return (
    <div className={"row item " + (status !== "done" ? "open" : "closed")}>
      <div className="six columns description">
        <div className="">{text}</div>
      </div>
      <div className="six columns actions">
        <button
          onClick={finish}
          className="button-primary"
          disabled={status === "done"}
        >Terminar</button>
      </div>
    </div>
  );
}

Item.propTypes = {
   text: PropTypes.string,
   finish: PropTypes.func.isRequired,
   status: PropTypes.string.isRequired
};

export default Item;
