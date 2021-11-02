import React from "react";

import { RACE_PLACEMENTS } from "../../../util/race-placements";

function TenthRow(props) {
  return (
    <tr>
      <td
        id="race_10"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race10.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race10.Races[place] !== "" ? (
          <td
            id={`Ten ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `Ten ${place}`,
                props.tableData.Race10.Races[place]
              )
            }
          >
            {props.tableData.Race10.Races[place]}
          </td>
        ) : (
          <td
            id={`Ten ${place}`}
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

export default TenthRow;