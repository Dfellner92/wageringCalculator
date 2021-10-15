import React from "react";
import Button from "./Button";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function ThirdButtons(props) {
  return (
    <div class="container">
      <h3 class="header">Third Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return <Button number={number} row="third" handler={props.handler} />;
        })}
      </div>
    </div>
  );
}

export default ThirdButtons;
