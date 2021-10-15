import React from "react";

import Button from "./Button";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function FourthButtons(props) {
  return (
    <div class="container">
      <h3 class="header">Fourth Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return <Button number={number} row="fourth" handler={props.handler} />;
        })}
      </div>
    </div>
  );
}

export default FourthButtons;
