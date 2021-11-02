import React from "react";

import { RACE_PLACEMENTS } from "../../util/race-placements";

function SixthRow(props) {
  return (
    <tr>
      <td
        id="race_06"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race06.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race06.Races[place] !== "" ? (
          <td
            id={`6 ${place}`}
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `6 ${place}`,
                props.tableData.Race06.Races[place]
              )
            }
          >
            {props.tableData.Race06.Races[place]}
          </td>
        ) : (
          <td
            id={`6 ${place}`}
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

export default SixthRow;
