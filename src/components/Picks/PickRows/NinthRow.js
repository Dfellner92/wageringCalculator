import React from "react";

import { RACE_PLACEMENTS } from "../../../util/race-placements";

function NinthRow(props) {
  return (
    <tr>
      <td
        id="race_09"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation +
          " " +
          props.tableData.Race09.raceInfo.number}
      </td>
      {RACE_PLACEMENTS.map((place) =>
        props.tableData.Race09.Races[place] !== "" ? (
          <td
            id={`9 ${place}`}
            className="pick-button"
            style={{
              border: "1px solid black",
              height: "8vh",
              width: "4vw",
            }}
            onClick={() =>
              props.handlePicks(
                `9 ${place}`,
                props.tableData.Race09.Races[place]
              )
            }
          >
            {props.tableData.Race09.Races[place]}
          </td>
        ) : (
          <td
            id={`9 ${place}`}
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

export default NinthRow;
