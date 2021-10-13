import React, { useEffect, useState } from "react";

import FirstButtons from "../FirstButtons";
import SecondButtons from "../SecondButtons";
import "./styles.css";

function MainContainer() {
  const [finalTotal, setFinalTotal] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);

  useEffect(() => {
    console.log(firstArray);
    console.log(secondArray);
  }, [firstArray, secondArray]);

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

    for (let i = 0; i < firstPlaceState.length; i++) {
      for (let j = 0; j < secondPlaceState.length; j++) {
        if (secondPlaceState[j] !== firstPlaceState[i]) {
          viablePairings.push(secondPlaceState[j]);
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
      </div>
    </div>
  );
}

export default MainContainer;
