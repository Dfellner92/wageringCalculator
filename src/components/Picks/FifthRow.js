import React from "react";

import { RACE_PLACEMENTS } from "../../util/race-placements";

function FifthRow(props) {
  return (
    <tr>
      <td
        id="race_05"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race05.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race05.Races[place] !== "" ? (
          <td
            id={`5 ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `5 ${place}`,
                props.tableData.Race05.Races[place]
              )
            }
          >
            {props.tableData.Race05.Races[place]}
          </td>
        ) : (
          <td
            id={`5 ${place}`}
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

export default FifthRow;
