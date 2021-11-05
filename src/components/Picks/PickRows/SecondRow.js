import React from "react";

import { RACE_PLACEMENTS } from "../../../util/race-placements";

function SecondRow(props) {
  return (
    <tr>
      <td
        id="race_02"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race02.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race02.Races[place] !== "" ? (
          <td
            id={`2 ${place}`}
            className="pick-button"
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `2 ${place}`,
                props.tableData.Race02.Races[place]
              )
            }
          >
            {props.tableData.Race02.Races[place]}
          </td>
        ) : (
          <td
            id={`2 ${place}`}
            className="pick-button"
            style={{
              height: "8vh",
              width: "4vw",
            }}
          ></td>
        )
      )}
    </tr>
  );
}

export default SecondRow;
