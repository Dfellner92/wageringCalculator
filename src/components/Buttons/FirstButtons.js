import React from "react";
import Button from './Button';

function FirstButtons(props) {
  return (
    <div class="container">
      <h3 class="header">First Place</h3>
      <div class="firstButtons">
        <Button number="1" row="first" handler={props.handler}/>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(2)}>
            2
          </button>
          <img
            id="check-first-2"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(3)}>
            3
          </button>
          <img
            id="check-first-3"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(4)}>
            4
          </button>
          <img
            id="check-first-4"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(5)}>
            5
          </button>
          <img
            id="check-first-5"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(6)}>
            6
          </button>
          <img
            id="check-first-6"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(7)}>
            7
          </button>
          <img
            id="check-first-7"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(8)}>
            8
          </button>
          <img
            id="check-first-8"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(9)}>
            9
          </button>
          <img
            id="check-first-9"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(10)}>
            10
          </button>
          <img
            id="check-first-10"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(11)}>
            11
          </button>
          <img
            id="check-first-11"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(12)}>
            12
          </button>
          <img
            id="check-first-12"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(13)}>
            13
          </button>
          <img
            id="check-first-13"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(14)}>
            14
          </button>
          <img
            id="check-first-14"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(15)}>
            15
          </button>
          <img
            id="check-first-15"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(16)}>
            16
          </button>
          <img
            id="check-first-16"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(17)}>
            17
          </button>
          <img
            id="check-first-17"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
        <div class="button">
          <button class="button-tag" onClick={() => props.handler(18)}>
            18
          </button>
          <img
            id="check-first-18"
            class="button-tag__check hide"
            src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
            alt="check first one"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstButtons;
