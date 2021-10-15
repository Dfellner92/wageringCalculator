import React from "react";
import Button from "./Button";
import { BUTTON_NUMBERS } from "../../util/button-numbers";

function FirstButtons(props) {
  
  return (
    <div class="container">
      <h3 class="header">First Place</h3>
      <div class="firstButtons">
        {BUTTON_NUMBERS.map((number) => {
          return <Button number={number} row="first" handler={props.handler} />;
        })}        
      </div>
    </div>
  );
}

export default FirstButtons;
