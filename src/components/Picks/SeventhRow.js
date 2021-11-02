import React from "react";

import { RACE_PLACEMENTS } from "../../util/race-placements";

function SeventhRow(props) {
  return (
    <tr>
      <td
        id="race_07"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race07.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race07.Races[place] !== "" ? (
          <td
            id={`7 ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `7 ${place}`,
                props.tableData.Race07.Races[place]
              )
            }
          >
            {props.tableData.Race07.Races[place]}
          </td>
        ) : (
          <td
            id={`7 ${place}`}
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

export default SeventhRow;
