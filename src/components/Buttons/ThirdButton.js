import React from "react";

function ThirdButton(props) {
  console.log(props.buttons);
  return (
    <div class="button">
      <button class="button-tag" onClick={() => props.handler(props.number)}>
        {props.number}
      </button>
      {props.thirdButtons.includes(props.number) ? (
        <img
          id={`check-${props.row}-${props.number}`}
          class="button-tag__check"
          src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
          alt="check first one"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default ThirdButton;
