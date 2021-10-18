import React from "react";

import FourthButton from "./FourthButton";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function FourthButtons(props) {
  return (
    <div class="container">
      <h3 class="header">Fourth Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return (
            <FourthButton
              fourthButtons={props.activeButtons}
              number={number}
              row="fourth"
              handler={props.handler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FourthButtons;
