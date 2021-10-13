import React, { useEffect, useState } from "react";
import "./styles.css";

function MainContainer() {
  const [finalTotal, setFinalTotal] = useState(0);
  let firstArray = [];
  let secondArray = [];

  const handleFirst = (num) => {
    if (firstArray.includes(num)) {
      document.getElementById(`check-first-${num}`).classList.add("hide");
      firstArray = firstArray.filter((number) => number !== num);
    } else {
      document.getElementById(`check-first-${num}`).classList.remove("hide");
      firstArray.push(num);
    }
    console.log(firstArray);
  };

  const handleSecond = (num) => {
    if (secondArray.includes(num)) {
      document.getElementById(`check-second-${num}`).classList.add("hide");
      secondArray = secondArray.filter((number) => number !== num);
    } else {
      document.getElementById(`check-second-${num}`).classList.remove("hide");
      secondArray.push(num);
    }
    console.log(secondArray);
  };

  console.log(finalTotal);

  const findTotal = (first, second) => {
    let secondTest = [];

    for (let i = 0; i < first.length; i++) {
      for (let j = 0; j < second.length; j++) {
        if (second[j] !== first[i]) {
          secondTest.push(second[j]);
        }
      }
    }

    console.log(secondTest.length);
    setFinalTotal(secondTest.length);
  };

  const resetTotal = () => {
    firstArray = [];
    secondArray = [];
    setFinalTotal(0);
    document.getElementById("check-first-1").classList.add("hide");
    document.getElementById("check-first-2").classList.add("hide");
    document.getElementById("check-first-3").classList.add("hide");
    document.getElementById("check-first-4").classList.add("hide");
    document.getElementById("check-first-5").classList.add("hide");
    document.getElementById("check-first-6").classList.add("hide");
    document.getElementById("check-first-7").classList.add("hide");
    document.getElementById("check-first-8").classList.add("hide");
    document.getElementById("check-first-9").classList.add("hide");
    document.getElementById("check-first-10").classList.add("hide");
    document.getElementById("check-first-11").classList.add("hide");
    document.getElementById("check-first-12").classList.add("hide");
    document.getElementById("check-first-13").classList.add("hide");
    document.getElementById("check-first-14").classList.add("hide");
    document.getElementById("check-first-15").classList.add("hide");
    document.getElementById("check-first-16").classList.add("hide");
    document.getElementById("check-first-17").classList.add("hide");
    document.getElementById("check-first-18").classList.add("hide");
    document.getElementById("check-second-1").classList.add("hide");
    document.getElementById("check-second-2").classList.add("hide");
    document.getElementById("check-second-3").classList.add("hide");
    document.getElementById("check-second-4").classList.add("hide");
    document.getElementById("check-second-5").classList.add("hide");
    document.getElementById("check-second-6").classList.add("hide");
    document.getElementById("check-second-7").classList.add("hide");
    document.getElementById("check-second-8").classList.add("hide");
    document.getElementById("check-second-9").classList.add("hide");
    document.getElementById("check-second-10").classList.add("hide");
    document.getElementById("check-second-11").classList.add("hide");
    document.getElementById("check-second-12").classList.add("hide");
    document.getElementById("check-second-13").classList.add("hide");
    document.getElementById("check-second-14").classList.add("hide");
    document.getElementById("check-second-15").classList.add("hide");
    document.getElementById("check-second-16").classList.add("hide");
    document.getElementById("check-second-17").classList.add("hide");
    document.getElementById("check-second-18").classList.add("hide");
  };

  return (
    <div>
      <div class="containing">
        <h3 class="heading">First Place</h3>
        <div class="firstButtons">
          <div class="button">
            <button class="button-tag" onClick={() => handleFirst(1)}>
              1
            </button>
            <img
              id="check-first-1"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleFirst(2)}>
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
            <button class="button-tag" onClick={() => handleFirst(3)}>
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
            <button class="button-tag" onClick={() => handleFirst(4)}>
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
            <button class="button-tag" onClick={() => handleFirst(5)}>
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
            <button class="button-tag" onClick={() => handleFirst(6)}>
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
            <button class="button-tag" onClick={() => handleFirst(7)}>
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
            <button class="button-tag" onClick={() => handleFirst(8)}>
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
            <button class="button-tag" onClick={() => handleFirst(9)}>
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
            <button class="button-tag" onClick={() => handleFirst(10)}>
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
            <button class="button-tag" onClick={() => handleFirst(11)}>
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
            <button class="button-tag" onClick={() => handleFirst(12)}>
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
            <button class="button-tag" onClick={() => handleFirst(13)}>
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
            <button class="button-tag" onClick={() => handleFirst(14)}>
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
            <button class="button-tag" onClick={() => handleFirst(15)}>
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
            <button class="button-tag" onClick={() => handleFirst(16)}>
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
            <button class="button-tag" onClick={() => handleFirst(17)}>
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
            <button class="button-tag" onClick={() => handleFirst(18)}>
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
      <div class="containing">
        <h3 class="heading">Second Place</h3>
        <div class="firstButtons">
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(1)}>
              1
            </button>
            <img
              id="check-second-1"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(2)}>
              2
            </button>
            <img
              id="check-second-2"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(3)}>
              3
            </button>
            <img
              id="check-second-3"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(4)}>
              4
            </button>
            <img
              id="check-second-4"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(5)}>
              5
            </button>
            <img
              id="check-second-5"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(6)}>
              6
            </button>
            <img
              id="check-second-6"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(7)}>
              7
            </button>
            <img
              id="check-second-7"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(8)}>
              8
            </button>
            <img
              id="check-second-8"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(9)}>
              9
            </button>
            <img
              id="check-second-9"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(10)}>
              10
            </button>
            <img
              id="check-second-10"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(11)}>
              11
            </button>
            <img
              id="check-second-11"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(12)}>
              12
            </button>
            <img
              id="check-second-12"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(13)}>
              13
            </button>
            <img
              id="check-second-13"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(14)}>
              14
            </button>
            <img
              id="check-second-14"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(15)}>
              15
            </button>
            <img
              id="check-second-15"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button class="button-tag" onClick={() => handleSecond(16)}>
              16
            </button>
            <img
              id="check-second-16"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button" onClick={() => handleSecond(17)}>
            <button class="button-tag">17</button>
            <img
              id="check-second-17"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
          <div class="button">
            <button
              value="eighteen"
              class="button-tag"
              onClick={() => handleSecond(18)}
            >
              18
            </button>
            <img
              id="check-second-18"
              class="button-tag__check hide"
              src="https://img.icons8.com/material-outlined/24/000000/checkmark--v1.png"
              alt="check first one"
            />
          </div>
        </div>
      </div>
      <div class="containing">
        <h3 class="heading">Cost of Wager</h3>
        <div>
          <button onClick={() => findTotal(firstArray, secondArray)}>
            find
          </button>{" "}
          <button onClick={() => resetTotal()}>reset</button>
        </div>
        <br />
        <div>{`$${finalTotal}.00`}</div>
      </div>
    </div>
  );
}

export default MainContainer;
