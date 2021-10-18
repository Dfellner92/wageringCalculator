import React, { useState } from "react";

import FirstButtons from "../Buttons/FirstButtons";
import SecondButtons from "../Buttons/SecondButtons";
import ThirdButtons from "../Buttons/ThirdButtons";

function Trifecta() {
  const [finalTotal, setFinalTotal] = useState(0);
  const [firstArray, setFirstArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [thirdArray, setThirdArray] = useState([]);

  const handleFirst = (num) => {
    if (firstArray.includes(num)) {
      //document.getElementById(`check-first-${num}`).classList.add("hide");
      setFirstArray(firstArray.filter((number) => number !== num));
    } else {
      //document.getElementById(`check-first-${num}`).classList.remove("hide");
      setFirstArray([...firstArray, num])
    }
  };

  const handleSecond = (num) => {
    if (secondArray.includes(num)) {
      //document.getElementById(`check-second-${num}`).classList.add("hide");
      setSecondArray(secondArray.filter((number) => number !== num));
    } else {
      //document.getElementById(`check-second-${num}`).classList.remove("hide");
      setSecondArray([...secondArray, num]);
    }
  };

  const handleThird = (num) => {
    if (thirdArray.includes(num)) {
      //document.getElementById(`check-third-${num}`).classList.add("hide");
      setThirdArray(thirdArray.filter((number) => number !== num));
    } else {
      //document.getElementById(`check-third-${num}`).classList.remove("hide");
      setThirdArray([...thirdArray, num]);
    }
  };

  const findTotal = (firstPlaceState, secondPlaceState, thirdPlaceState) => {
    let viablePairings = [];

    for (const first of firstPlaceState) {
      for (const second of secondPlaceState) {
        for (const third of thirdPlaceState) {
          if (second !== first && second !== third && first !== third) {
            viablePairings.push(third);
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
    setFinalTotal(0);
  };

  return (
    <div>
      <h2 className="header">Trifecta</h2>
      <FirstButtons activeButtons={firstArray} handler={handleFirst} />
      <SecondButtons activeButtons={secondArray} handler={handleSecond} />
      <ThirdButtons activeButtons={thirdArray} handler={handleThird} />
      <div class="container">
        <h3 class="header">Cost of Wager</h3>
        <div>
          <button onClick={() => findTotal(firstArray, secondArray, thirdArray)}>
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

export default Trifecta;
