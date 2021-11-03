import React, { useState } from "react";

import BELMONT_PARK_OCT_29_2021 from "../../util/belmont-park-20211029";
import KEENELAND_10_29_21 from "../../util/keeneland-20211029";
import PickLabels from "./PickLabels";
import FirstRow from "./PickRows/FirstRow";
import SecondRow from "./PickRows/SecondRow";
import ThirdRow from "./PickRows/ThirdRow";
import FourthRow from "./PickRows/FourthRow";
import FifthRow from "./PickRows/FifthRow";
import SixthRow from "./PickRows/SixthRow";
import SeventhRow from "./PickRows/SeventhRow";
import EighthRow from "./PickRows/EighthRow";
import NinthRow from "./PickRows/NinthRow";
import TenthRow from "./PickRows/TenthRow";
import { handlePickStyles } from "./PickFunctions/handlePickType";
import TableDataDropdown from "./PickMenus/TableDataDropdown";
import PickTypeMenu from "./PickMenus/PickTypeMenu";
import CostRender from "./PickMenus/CostRender";

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
    if (pickType === 5 || pickType === 3 || pickType === 4) {
      if (allPickIDs.includes(pairID)) {
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

  return (
    <div>
      <div>
        <TableDataDropdown
          tableData={tableData}
          BEL_10_29_21={BELMONT_PARK_OCT_29_2021}
          KEE_10_29_21={KEENELAND_10_29_21}
          handleTableData={handleTableData}
        />
        <PickTypeMenu handlePickType={handlePickType} pickType={pickType} />
        <CostRender
          pickType={pickType}
          firstVals={firstVals}
          secondVals={secondVals}
          thirdVals={thirdVals}
          fourthVals={fourthVals}
          fifthVals={fifthVals}
          sixthVals={sixthVals}
          seventhVals={seventhVals}
          eighthVals={eighthVals}
          ninthVals={ninthVals}
          tenthVals={tenthVals}
          setCalcValue={setCalcValue}
          calcValue={calcValue}
        />
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
