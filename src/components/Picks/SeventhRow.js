import React from "react";

function SeventhRow(props) {
  return (
    <tr>
      <td
        id="race_02"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation + " " + props.tableData.Race07.raceInfo.number}
      </td>
      {props.tableData.Race07.Group_A[1] !== "" ? (
        <td
          id="7 1"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 1", props.tableData.Race07.Group_A[1])}
        >
          {props.tableData.Race07.Group_A[1]}
        </td>
      ) : (
        <td
          id="7 1"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race07.Group_A[2] !== "" ? (
        <td
          id="7 2"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 2", props.tableData.Race07.Group_A[2])}
        >
          {props.tableData.Race07.Group_A[2]}
        </td>
      ) : (
        <td
          id="7 2"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race07.Group_A[3] !== "" ? (
        <td
          id="7 3"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 3", props.tableData.Race07.Group_A[3])}
        >
          {props.tableData.Race07.Group_A[3]}
        </td>
      ) : (
        <td
          id="7 3"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race07.Group_A[4] !== "" ? (
        <td
          id="7 4"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 4", props.tableData.Race07.Group_A[4])}
        >
          {props.tableData.Race07.Group_A[4]}
        </td>
      ) : (
        <td
          id="7 4"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race07.Group_A[4.5] !== "" ? (
        <td
          id="7 4.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 4.5", props.tableData.Race07.Group_A[4.5])}
        >
          {props.tableData.Race07.Group_A[4.5]}
        </td>
      ) : (
        <td
          id="7 4.5"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race07.Group_A[4.9] !== "" ? (
        <td
          id="7 4.9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 4.9", props.tableData.Race07.Group_A[4.9])}
        >
          {props.tableData.Race07.Group_A[4.9]}
        </td>
      ) : (
        <td id="7 4.9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[5] !== "" ? (
        <td
          id="7 5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 5", props.tableData.Race07.Group_B[5])}
        >
          {props.tableData.Race07.Group_B[5]}
        </td>
      ) : (
        <td id="7 5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[6] !== "" ? (
        <td
          id="7 6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 6", props.tableData.Race07.Group_B[6])}
        >
          {props.tableData.Race07.Group_B[6]}
        </td>
      ) : (
        <td id="7 6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[7] !== "" ? (
        <td
          id="7 7"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 7", props.tableData.Race07.Group_B[7])}
        >
          {props.tableData.Race07.Group_B[7]}
        </td>
      ) : (
        <td id="7 7" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[8] !== "" ? (
        <td
          id="7 8"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 8", props.tableData.Race07.Group_B[8])}
        >
          {props.tableData.Race07.Group_B[8]}
        </td>
      ) : (
        <td id="7 8" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[9] !== "" ? (
        <td
          id="7 9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 9", props.tableData.Race07.Group_B[9])}
        >
          {props.tableData.Race07.Group_B[9]}
        </td>
      ) : (
        <td id="7 9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[9.5] !== "" ? (
        <td
          id="7 9.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 9.5", props.tableData.Race07.Group_B[9.5])}
        >
          {props.tableData.Race07.Group_B[9.5]}
        </td>
      ) : (
        <td id="7 9.5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_B[9.6] !== "" ? (
        <td
          id="7 9.6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 9.6", props.tableData.Race07.Group_B[9.6])}
        >
          {props.tableData.Race07.Group_B[9.6]}
        </td>
      ) : (
        <td id="7 9.6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[10] !== "" ? (
        <td
          id="7 10"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 10", props.tableData.Race07.Group_C[10])}
        >
          {props.tableData.Race07.Group_C[10]}
        </td>
      ) : (
        <td id="7 10" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[11] !== "" ? (
        <td
          id="7 11"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 11", props.tableData.Race07.Group_C[11])}
        >
          {props.tableData.Race07.Group_C[11]}
        </td>
      ) : (
        <td id="7 11" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[12] !== "" ? (
        <td
          id="7 12"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 12", props.tableData.Race07.Group_C[12])}
        >
          {props.tableData.Race07.Group_C[12]}
        </td>
      ) : (
        <td id="7 12" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[13] !== "" ? (
        <td
          id="7 13"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 13", props.tableData.Race07.Group_C[13])}
        >
          {props.tableData.Race07.Group_C[13]}
        </td>
      ) : (
        <td id="7 13" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[14] !== "" ? (
        <td
          id="7 14"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 14", props.tableData.Race07.Group_C[14])}
        >
          {props.tableData.Race07.Group_C[14]}
        </td>
      ) : (
        <td id="7 14" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[15] !== "" ? (
        <td
          id="7 15"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 15", props.tableData.Race07.Group_C[15])}
        >
          {props.tableData.Race07.Group_C[15]}
        </td>
      ) : (
        <td id="7 15" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race07.Group_C[16] !== "" ? (
        <td
          id="7 16"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("7 16", props.tableData.Race07.Group_C[16])}
        >
          {props.tableData.Race07.Group_C[16]}
        </td>
      ) : (
        <td id="7 16" style={{ height: "8vh", width: "4vw" }}></td>
      )}
    </tr>
  );
}

export default SeventhRow;
