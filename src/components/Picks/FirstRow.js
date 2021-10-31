import React from "react";

function FirstRow(props) {
  return (
    <tr>
      <td
        id="race_01"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation + " " + props.tableData.Race01.raceInfo.number}
      </td>
      {props.tableData.Race01.Group_A[1] !== "" ? (
        <td
          id="1 1"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 1", props.tableData.Race01.Group_A[1])}
        >
          {props.tableData.Race01.Group_A[1]}
        </td>
      ) : (
        <td
          id="1 1"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race01.Group_A[2] !== "" ? (
        <td
          id="1 2"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 2", props.tableData.Race01.Group_A[2])}
        >
          {props.tableData.Race01.Group_A[2]}
        </td>
      ) : (
        <td
          id="1 2"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race01.Group_A[3] !== "" ? (
        <td
          id="1 3"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 3", props.tableData.Race01.Group_A[3])}
        >
          {props.tableData.Race01.Group_A[3]}
        </td>
      ) : (
        <td
          id="1 3"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race01.Group_A[4] !== "" ? (
        <td
          id="1 4"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 4", props.tableData.Race01.Group_A[4])}
        >
          {props.tableData.Race01.Group_A[4]}
        </td>
      ) : (
        <td
          id="1 4"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race01.Group_A[4.5] !== "" ? (
        <td
          id="1 4.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 4.5", props.tableData.Race01.Group_A[4.5])}
        >
          {props.tableData.Race01.Group_A[4.5]}
        </td>
      ) : (
        <td
          id="1 4.5"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race01.Group_A[4.9] !== "" ? (
        <td
          id="1 4.9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 4.9", props.tableData.Race01.Group_A[4.9])}
        >
          {props.tableData.Race01.Group_A[4.9]}
        </td>
      ) : (
        <td id="1 4.9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[5] !== "" ? (
        <td
          id="1 5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 5", props.tableData.Race01.Group_B[5])}
        >
          {props.tableData.Race01.Group_B[5]}
        </td>
      ) : (
        <td id="1 5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[6] !== "" ? (
        <td
          id="1 6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 6", props.tableData.Race01.Group_B[6])}
        >
          {props.tableData.Race01.Group_B[6]}
        </td>
      ) : (
        <td id="1 6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[7] !== "" ? (
        <td
          id="1 7"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 7", props.tableData.Race01.Group_B[7])}
        >
          {props.tableData.Race01.Group_B[7]}
        </td>
      ) : (
        <td id="1 7" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[8] !== "" ? (
        <td
          id="1 8"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 8", props.tableData.Race01.Group_B[8])}
        >
          {props.tableData.Race01.Group_B[8]}
        </td>
      ) : (
        <td id="1 8" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[9] !== "" ? (
        <td
          id="1 9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 9", props.tableData.Race01.Group_B[9])}
        >
          {props.tableData.Race01.Group_B[9]}
        </td>
      ) : (
        <td id="1 9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[9.5] !== "" ? (
        <td
          id="1 9.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 9.5", props.tableData.Race01.Group_B[9.5])}
        >
          {props.tableData.Race01.Group_B[9.5]}
        </td>
      ) : (
        <td id="1 9.5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_B[9.6] !== "" ? (
        <td
          id="1 9.6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 9.6", props.tableData.Race01.Group_B[9.6])}
        >
          {props.tableData.Race01.Group_B[9.6]}
        </td>
      ) : (
        <td id="1 9.6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[10] !== "" ? (
        <td
          id="1 10"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 10", props.tableData.Race01.Group_C[10])}
        >
          {props.tableData.Race01.Group_C[10]}
        </td>
      ) : (
        <td id="1 10" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[11] !== "" ? (
        <td
          id="1 11"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 11", props.tableData.Race01.Group_C[11])}
        >
          {props.tableData.Race01.Group_C[11]}
        </td>
      ) : (
        <td id="1 11" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[12] !== "" ? (
        <td
          id="1 12"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 12", props.tableData.Race01.Group_C[12])}
        >
          {props.tableData.Race01.Group_C[12]}
        </td>
      ) : (
        <td id="1 12" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[13] !== "" ? (
        <td
          id="1 13"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 13", props.tableData.Race01.Group_C[13])}
        >
          {props.tableData.Race01.Group_C[13]}
        </td>
      ) : (
        <td id="1 13" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[14] !== "" ? (
        <td
          id="1 14"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 14", props.tableData.Race01.Group_C[14])}
        >
          {props.tableData.Race01.Group_C[14]}
        </td>
      ) : (
        <td id="1 14" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[15] !== "" ? (
        <td
          id="1 15"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 15", props.tableData.Race01.Group_C[15])}
        >
          {props.tableData.Race01.Group_C[15]}
        </td>
      ) : (
        <td id="1 15" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race01.Group_C[16] !== "" ? (
        <td
          id="1 16"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("1 16", props.tableData.Race01.Group_C[16])}
        >
          {props.tableData.Race01.Group_C[16]}
        </td>
      ) : (
        <td id="1 16" style={{ height: "8vh", width: "4vw" }}></td>
      )}
    </tr>
  );
}

export default FirstRow;
