import React from "react";
import FirstButton from "./FirstButton";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function FirstButtons(props) {
  return (
    <div class="container">
      <h3 class="header">First Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return <FirstButton firstButtons={props.activeButtons} number={number} row="first" handler={props.handler} />;
        })}        
      </div>
    </div>
  );
}

export default FirstButtons;
