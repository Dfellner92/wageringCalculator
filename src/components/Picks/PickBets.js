import React, { useEffect, useState } from "react";

import BELMONT_PARK_OCT_29_2021 from "../../util/belmont-park-20211029";
import KEENELAND_10_29_21 from "../../util/keeneland-20211029";

const PickBets = () => {
  const [tableData, setTableData] = useState({ ...BELMONT_PARK_OCT_29_2021 });
  const [pickType, setPickType] = useState(3);
  const [pickFiveValues, setPickFiveValues] = useState([]);

  console.log(tableData);

  const handleTableData = (obj) => {
    setTableData({ ...obj });
  };

  const handlePickType = (number) => {
    setPickType(number);
  };

  const handlePicks = (pairID) => {
    console.log(pairID);
    if (pickType === 5) {
      if (pickFiveValues.includes(pairID)) {
        setPickFiveValues([]);
      } else {
        setPickFiveValues((state) => [...state, [pairID]]);
      }
    }
  };

  console.log(pickFiveValues);

  useEffect(() => {
    setTableData(BELMONT_PARK_OCT_29_2021);
  }, [setTableData]);

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
          <span>{pickType}</span>
          <div class="dropdown-content">
            <p onClick={() => handlePickType(3)}>3</p>
            <p onClick={() => handlePickType(4)}>4</p>
            <p onClick={() => handlePickType(5)}>5</p>
          </div>
        </div>
      </div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              1
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              2
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              3
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4.5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4.9
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              6
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              7
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              8
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9.5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9.6
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              10
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              11
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              12
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              13
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              14
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              15
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              16
            </td>
          </tr>
          <tr>
            <td
              id="race_01"
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race01.raceInfo.number}
            </td>
            <td
              id="01_1"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
              onClick={() => handlePicks([1, 1])}
            >
              {tableData.Race01.Group_A[1]}
            </td>
            <td
              id="01_2"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
              onClick={() => handlePicks([1, 2])}
            >
              {tableData.Race01.Group_A[2]}
            </td>
            <td
              id="01_3"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_A[3]}
            </td>
            <td
              id="01_4"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_A[4]}
            </td>
            <td
              id="01_4.5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_A[4.5]}
            </td>
            <td
              id="01_4.9"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_A[4.9]}
            </td>
            <td
              id="01_5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[5]}
            </td>
            <td
              id="01_6"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[6]}
            </td>
            <td
              id="01_7"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[7]}
            </td>
            <td
              id="01_8"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[8]}
            </td>
            <td
              id="01_9"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[9]}
            </td>
            <td
              id="01_9.5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[9.5]}
            </td>
            <td
              id="01_9.6"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_B[9.6]}
            </td>
            <td
              id="01_10"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[10]}
            </td>
            <td
              id="01_11"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[11]}
            </td>
            <td
              id="01_12"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[12]}
            </td>
            <td
              id="01_13"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[13]}
            </td>
            <td
              id="01_14"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[14]}
            </td>
            <td
              id="01_15"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[15]}
            </td>
            <td
              id="01_16"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race01.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race02.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race02.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race03.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race03.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race04.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race04.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race05.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race05.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race06.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race06.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race07.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race07.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race08.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race08.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race09.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race09.Group_C[16]}
            </td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >
              {tableData.RaceID.abbreviation +
                " " +
                tableData.Race10.raceInfo.number}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[1]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[2]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[3]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[4]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[4.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_A[4.9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[7]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[8]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[9]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[9.5]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_B[9.6]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[10]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[11]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[12]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[13]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[14]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[15]}
            </td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >
              {tableData.Race10.Group_C[16]}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PickBets;
