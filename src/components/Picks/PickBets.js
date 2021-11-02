import React, { useState } from "react";

import BELMONT_PARK_OCT_29_2021 from "../../util/belmont-park-20211029";
import KEENELAND_10_29_21 from "../../util/keeneland-20211029";

import PickLabels from "./PickLabels";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import FourthRow from "./FourthRow";
import FifthRow from "./FifthRow";
import SixthRow from "./SixthRow";
import SeventhRow from "./SeventhRow";
import EighthRow from "./EighthRow";
import NinthRow from "./NinthRow";
import TenthRow from "./TenthRow";
import { handlePickStyles } from "./PickFunctions/handlePickType";

const PickBets = () => {
  const [tableData, setTableData] = useState({ ...BELMONT_PARK_OCT_29_2021 });
  const [pickType, setPickType] = useState(3);
  const [allPickIDs, setAllPickIDs] = useState([]);
  const [firstVals, setFirstVals] = useState([]);
  const [secondVals, setSecondVals] = useState([]);
  const [thirdVals, setThirdVals] = useState([]);
  const [fourthVals, setFourthVals] = useState([]);
  const [fifthVals, setFifthVals] = useState([]);
  const [sixthVals, setSixthVals] = useState([]);
  const [seventhVals, setSeventhVals] = useState([]);
  const [eighthVals, setEighthVals] = useState([]);
  const [ninthVals, setNinthVals] = useState([]);
  const [tenthVals, setTenthVals] = useState([]);
  const [calcValue, setCalcValue] = useState(0);

  const stateReset = () => {
    setAllPickIDs([]);
    setCalcValue(0);
    setFirstVals([]);
    setSecondVals([]);
    setThirdVals([]);
    setFourthVals([]);
    setFifthVals([]);
    setSixthVals([]);
    setSeventhVals([]);
    setEighthVals([]);
    setNinthVals([]);
    setTenthVals([]);
    handlePickStyles();
  };

  const handleTableData = (raceData) => {
    stateReset();
    setTableData({ ...raceData });
  };

  const handlePickType = (number) => {
    stateReset();
    setPickType(number);
  };

  const handlePicks = (pairID, value) => {
    console.log(pairID.slice(0, 3));
    if (pickType === 5 || pickType === 3) {
      if (allPickIDs.includes(pairID)) {
        console.log("includes");
        setAllPickIDs(allPickIDs.filter((pair) => pair !== pairID));
        document.getElementById(pairID).style.backgroundColor = "";
        if (pairID.slice(0, 1) === "1") {
          setFirstVals(firstVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "2") {
          setSecondVals(secondVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "3") {
          setThirdVals(thirdVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "4") {
          setFourthVals(fourthVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "5") {
          setFifthVals(fifthVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "6") {
          setSixthVals(sixthVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "7") {
          setSeventhVals(seventhVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "8") {
          setEighthVals(eighthVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 1) === "9") {
          setNinthVals(ninthVals.filter((val) => val !== value));
        } else if (pairID.slice(0, 3) === "Ten") {
          setTenthVals(tenthVals.filter((val) => val !== value));
        }
      } else {
        console.log("doesnt include");
        setAllPickIDs((state) => [...state, pairID]);
        document.getElementById(pairID).style.backgroundColor =
          "rgb(255, 80, 80)";
        if (pairID.slice(0, 1) === "1") {
          setFirstVals([...firstVals, value]);
        } else if (pairID.slice(0, 1) === "2") {
          setSecondVals([...secondVals, value]);
        } else if (pairID.slice(0, 1) === "3") {
          setThirdVals([...thirdVals, value]);
        } else if (pairID.slice(0, 1) === "4") {
          setFourthVals([...fourthVals, value]);
        } else if (pairID.slice(0, 1) === "5") {
          setFifthVals([...fifthVals, value]);
        } else if (pairID.slice(0, 1) === "6") {
          setSixthVals([...sixthVals, value]);
        } else if (pairID.slice(0, 1) === "7") {
          setSeventhVals([...seventhVals, value]);
        } else if (pairID.slice(0, 1) === "8") {
          setEighthVals([...eighthVals, value]);
        } else if (pairID.slice(0, 1) === "9") {
          setNinthVals([...ninthVals, value]);
        } else if (pairID.slice(0, 3) === "Ten") {
          console.log(pairID.slice(0, 3) === "Ten");
          setTenthVals([...tenthVals, value]);
        }
      }
    }
  };

  const handleCalculation = () => {
    if (pickType === 3) {
      if (
        firstVals.length > 0 &&
        secondVals.length > 0 &&
        thirdVals.length > 0
      ) {
        setCalcValue(firstVals.length * secondVals.length * thirdVals.length);
      } else if (
        secondVals.length > 0 &&
        thirdVals.length > 0 &&
        fourthVals.length > 0
      ) {
        setCalcValue(secondVals.length * thirdVals.length * fourthVals.length);
      } else if (
        thirdVals.length > 0 &&
        fourthVals.length > 0 &&
        fifthVals.length > 0
      ) {
        setCalcValue(thirdVals.length * fourthVals.length * fifthVals.length);
      } else if (
        fourthVals.length > 0 &&
        fifthVals.length > 0 &&
        sixthVals.length > 0
      ) {
        setCalcValue(fourthVals.length * fifthVals.length * sixthVals.length);
      } else if (
        fifthVals.length > 0 &&
        sixthVals.length > 0 &&
        seventhVals.length > 0
      ) {
        setCalcValue(fifthVals.length * sixthVals.length * seventhVals.length);
      }else if (
        sixthVals.length > 0 &&
        seventhVals.length > 0 &&
        eighthVals.length > 0
      ) {
        setCalcValue(sixthVals.length * seventhVals.length * eighthVals.length);
      }else if (
        seventhVals.length > 0 &&
        eighthVals.length > 0 &&
        ninthVals.length > 0
      ) {
        setCalcValue(seventhVals.length * eighthVals.length * ninthVals.length);
      }else if (
        eighthVals.length > 0 &&
        ninthVals.length > 0 &&
        tenthVals.length > 0
      ) {
        setCalcValue(eighthVals.length * ninthVals.length * tenthVals.length);
      }
    } else if (pickType === 5) {
      if (
        firstVals.length > 0 &&
        secondVals.length > 0 &&
        thirdVals.length > 0 &&
        fourthVals.length > 0 &&
        fifthVals.length > 0 &&
        sixthVals.length > 0 &&
        seventhVals.length > 0 &&
        eighthVals.length > 0 &&
        ninthVals.length > 0 &&
        tenthVals.length > 0
      ) {
        alert("One bet at a time!");
      } else if (
        firstVals.length > 0 &&
        secondVals.length > 0 &&
        thirdVals.length > 0 &&
        fourthVals.length > 0 &&
        fifthVals.length > 0
      ) {
        setCalcValue(
          firstVals.length *
            secondVals.length *
            thirdVals.length *
            fourthVals.length *
            fifthVals.length
        );
      } else if (
        sixthVals.length > 0 &&
        seventhVals.length > 0 &&
        eighthVals.length > 0 &&
        ninthVals.length > 0 &&
        tenthVals.length > 0
      ) {
        setCalcValue(
          sixthVals.length *
            seventhVals.length *
            eighthVals.length *
            ninthVals.length *
            tenthVals.length
        );
      } else {
        alert("Not Enough Races Selected for a Pick 5!");
      }
    }
  };

  return (
    <div>
      <div>
        <div class="dropdown">
          <span>{tableData.RaceID.name}</span>
          <div class="dropdown-content">
            <p
              value={BELMONT_PARK_OCT_29_2021.RaceID.name}
              onClick={() => handleTableData(BELMONT_PARK_OCT_29_2021)}
            >
              {BELMONT_PARK_OCT_29_2021.RaceID.name}
            </p>
            <p
              value={KEENELAND_10_29_21.RaceID.name}
              onClick={() => handleTableData(KEENELAND_10_29_21)}
            >
              {KEENELAND_10_29_21.RaceID.name}
            </p>
          </div>
        </div>
        <div class="dropdown">
          <span>Pick {pickType}</span>
          <div class="dropdown-content">
            <p onClick={() => handlePickType(3)}>Pick 3</p>
            <p onClick={() => handlePickType(4)}>Pick 4</p>
            <p onClick={() => handlePickType(5)}>Pick 5</p>
          </div>
        </div>
        <div className="cost-block">
          <button
            className="cost-block__button"
            onClick={() => handleCalculation()}
          >
            Calculate Wage Cost
          </button>
          <div id="cost-value" className="cost-block__value">
            ${calcValue}.00
          </div>
        </div>
      </div>
      <table>
        <tbody>
          <PickLabels />
          <FirstRow handlePicks={handlePicks} tableData={tableData} />
          <SecondRow handlePicks={handlePicks} tableData={tableData} />
          <ThirdRow handlePicks={handlePicks} tableData={tableData} />
          <FourthRow handlePicks={handlePicks} tableData={tableData} />
          <FifthRow handlePicks={handlePicks} tableData={tableData} />
          <SixthRow handlePicks={handlePicks} tableData={tableData} />
          <SeventhRow handlePicks={handlePicks} tableData={tableData} />
          <EighthRow handlePicks={handlePicks} tableData={tableData} />
          <NinthRow handlePicks={handlePicks} tableData={tableData} />
          <TenthRow handlePicks={handlePicks} tableData={tableData} /> 
        </tbody>
      </table>
    </div>
  );
};

export default PickBets;
