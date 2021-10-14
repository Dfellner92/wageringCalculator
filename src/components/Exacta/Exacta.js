import React, { useState } from "react";

import FirstButtons from "../Buttons/FirstButtons";
import SecondButtons from "../Buttons/SecondButtons";

function Exacta() {
  const [finalTotal, setFinalTotal] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);

  const handleFirst = (num) => {
    if (firstArray.includes(num)) {
      document.getElementById(`check-first-${num}`).classList.add("hide");
      setFirstArray(firstArray.filter((number) => number !== num));
    } else {
      document.getElementById(`check-first-${num}`).classList.remove("hide");
      setFirstArray([...firstArray, num])
    }
  };

  const handleSecond = (num) => {
    if (secondArray.includes(num)) {
      document.getElementById(`check-second-${num}`).classList.add("hide");
      setSecondArray(secondArray.filter((number) => number !== num));
    } else {
      document.getElementById(`check-second-${num}`).classList.remove("hide");
      setSecondArray([...secondArray, num]);
    }
  };

  const findTotal = (firstPlaceState, secondPlaceState) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        if (second !== first) {
          viablePairings.push(second);
        }
      }
    }

    setFinalTotal(viablePairings.length);
  };

  const resetTotal = () => {
    setFirstArray([]);
    setSecondArray([]);
    setFinalTotal(0);
    document
      .querySelectorAll(".button-tag__check")
      .forEach((item) => item.classList.add("hide"));
  };

  return (
    <div>
      <h2 className="header">Exacta</h2>
      <FirstButtons handler={handleFirst} />
      <SecondButtons handler={handleSecond} />
      <div class="container">
        <h3 class="header">Cost of Wager</h3>
        <div>
          <button onClick={() => findTotal(firstArray, secondArray)}>
            Calculate
          </button>{" "}
          <button onClick={() => resetTotal()}>Reset</button>
        </div>
        <br />
        <div>{`$${finalTotal}.00`}</div>
        <br />
      </div>
    </div>
  );
}

export default Exacta;
