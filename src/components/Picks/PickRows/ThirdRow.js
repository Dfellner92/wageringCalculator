import React from "react";

import { RACE_PLACEMENTS } from "../../../util/race-placements";

function ThirdRow(props) {
  return (
    <tr>
      <td
        id="race_03"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race03.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race03.Races[place] !== "" ? (
          <td
            id={`3 ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `3 ${place}`,
                props.tableData.Race03.Races[place]
              )
            }
          >
            {props.tableData.Race03.Races[place]}
          </td>
        ) : (
          <td
            id={`3 ${place}`}
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

export default ThirdRow;
