import React, { useState } from "react";

import FirstButtons from "./FirstButtons";
import SecondButtons from "./SecondButtons";
import ThirdButtons from "./ThirdButtons";
import FourthButtons from "./FourthButtons";

function Superfecta() {
  const [finalTotal, setFinalTotal] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);
  const [fourthArray, setFourthArray] = useState([]);

  const handleFirst = (num) => {
    if (firstArray.includes(num)) {
      document.getElementById(`check-first-${num}`).classList.add("hide");
      setFirstArray(firstArray.filter((number) => number !== num));
    } else {
      document.getElementById(`check-first-${num}`).classList.remove("hide");
      setFirstArray([...firstArray, num]);
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

  const handleThird = (num) => {
    if (thirdArray.includes(num)) {
      document.getElementById(`check-third-${num}`).classList.add("hide");
      setThirdArray(thirdArray.filter((number) => number !== num));
    } else {
      document.getElementById(`check-third-${num}`).classList.remove("hide");
      setThirdArray([...thirdArray, num]);
    }
  };

  const handleFourth = (num) => {
    if (fourthArray.includes(num)) {
      document.getElementById(`check-fourth-${num}`).classList.add("hide");
      setFourthArray(fourthArray.filter((number) => number !== num));
    } else {
      document.getElementById(`check-fourth-${num}`).classList.remove("hide");
      setFourthArray([...fourthArray, num]);
    }
  };

  const findTotal = (
    firstPlaceState,
    secondPlaceState,
    thirdPlaceState,
    fourthPlaceState
  ) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        for (const third of thirdPlaceState) {
          for (const fourth of fourthPlaceState) {
            if (
              second !== first &&
              second !== third &&
              first !== third &&
              first !== fourth &&
              second !== fourth &&
              third !== fourth
            ) {
              viablePairings.push(fourth);
            }
          }
        }
      }
    }

    setFinalTotal(viablePairings.length);
  };

  const resetTotal = () => {
    setFirstArray([]);
    setSecondArray([]);
    setThirdArray([]);
    setFourthArray([]);
    setFinalTotal(0);
    document
      .querySelectorAll(".button-tag__check")
      .forEach((item) => item.classList.add("hide"));
  };

  return (
    <div>
      <h2 className="header">Trifecta</h2>
      <FirstButtons handler={handleFirst} />
      <SecondButtons handler={handleSecond} />
      <ThirdButtons handler={handleThird} />
      <FourthButtons handler={handleFourth} />
      <div class="container">
        <h3 class="header">Cost of Wager</h3>
        <div>
          <button
            onClick={() => findTotal(firstArray, secondArray, thirdArray, fourthArray)}
          >
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

export default Superfecta;
