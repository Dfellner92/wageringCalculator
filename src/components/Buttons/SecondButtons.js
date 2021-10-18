import React from "react";

import SecondButton from "./SecondButton";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function SecondButtons(props) {
  return (
    <div class="container">
      <h3 class="header">Second Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return <SecondButton secondButtons={props.activeButtons} number={number} row="second" handler={props.handler} />;
        })}
      </div>
    </div>
  );
}

export default SecondButtons;
