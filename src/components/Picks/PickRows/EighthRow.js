import React from "react";

import { RACE_PLACEMENTS } from "../../../util/race-placements";

function EighthRow(props) {
  return (
    <tr>
      <td
        id="race_08"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race08.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race08.Races[place] !== "" ? (
          <td
            id={`8 ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `8 ${place}`,
                props.tableData.Race08.Races[place]
              )
            }
          >
            {props.tableData.Race08.Races[place]}
          </td>
        ) : (
          <td
            id={`8 ${place}`}
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

export default EighthRow;