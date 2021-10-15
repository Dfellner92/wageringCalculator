import React from "react";

function Button(props) {
  return (
    <div class="button">
      <button class="button-tag" onClick={() => props.handler(props.number)}>
        {props.number}
      </button>
      <img
        id={`check-${props.row}-${props.number}`}
        class="button-tag__check hide"
        src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
        alt="check first one"
      />
    </div>
  );
}

export default Button;