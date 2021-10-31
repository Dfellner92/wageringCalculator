import React from "react";

function TenthRow(props) {
  return (
    <tr>
      <td
        id="race_02"
        style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
      >
        {props.tableData.RaceID.abbreviation + " " + props.tableData.Race10.raceInfo.number}
      </td>
      {props.tableData.Race10.Group_A[1] !== "" ? (
        <td
          id="Ten 1"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 1", props.tableData.Race10.Group_A[1])}
        >
          {props.tableData.Race10.Group_A[1]}
        </td>
      ) : (
        <td
          id="Ten 1"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race10.Group_A[2] !== "" ? (
        <td
          id="Ten 2"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 2", props.tableData.Race10.Group_A[2])}
        >
          {props.tableData.Race10.Group_A[2]}
        </td>
      ) : (
        <td
          id="Ten 2"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race10.Group_A[3] !== "" ? (
        <td
          id="Ten 3"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 3", props.tableData.Race10.Group_A[3])}
        >
          {props.tableData.Race10.Group_A[3]}
        </td>
      ) : (
        <td
          id="Ten 3"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race10.Group_A[4] !== "" ? (
        <td
          id="Ten 4"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 4", props.tableData.Race10.Group_A[4])}
        >
          {props.tableData.Race10.Group_A[4]}
        </td>
      ) : (
        <td
          id="Ten 4"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race10.Group_A[4.5] !== "" ? (
        <td
          id="Ten 4.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 4.5", props.tableData.Race10.Group_A[4.5])}
        >
          {props.tableData.Race10.Group_A[4.5]}
        </td>
      ) : (
        <td
          id="Ten 4.5"
          style={{
            height: "8vh",
            width: "4vw",
          }}
        ></td>
      )}
      {props.tableData.Race10.Group_A[4.9] !== "" ? (
        <td
          id="Ten 4.9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 4.9", props.tableData.Race10.Group_A[4.9])}
        >
          {props.tableData.Race10.Group_A[4.9]}
        </td>
      ) : (
        <td id="Ten 4.9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[5] !== "" ? (
        <td
          id="Ten 5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 5", props.tableData.Race10.Group_B[5])}
        >
          {props.tableData.Race10.Group_B[5]}
        </td>
      ) : (
        <td id="Ten 5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[6] !== "" ? (
        <td
          id="Ten 6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 6", props.tableData.Race10.Group_B[6])}
        >
          {props.tableData.Race10.Group_B[6]}
        </td>
      ) : (
        <td id="Ten 6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[7] !== "" ? (
        <td
          id="Ten 7"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 7", props.tableData.Race10.Group_B[7])}
        >
          {props.tableData.Race10.Group_B[7]}
        </td>
      ) : (
        <td id="Ten 7" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[8] !== "" ? (
        <td
          id="Ten 8"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 8", props.tableData.Race10.Group_B[8])}
        >
          {props.tableData.Race10.Group_B[8]}
        </td>
      ) : (
        <td id="Ten 8" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[9] !== "" ? (
        <td
          id="Ten 9"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 9", props.tableData.Race10.Group_B[9])}
        >
          {props.tableData.Race10.Group_B[9]}
        </td>
      ) : (
        <td id="Ten 9" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[9.5] !== "" ? (
        <td
          id="Ten 9.5"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 9.5", props.tableData.Race10.Group_B[9.5])}
        >
          {props.tableData.Race10.Group_B[9.5]}
        </td>
      ) : (
        <td id="Ten 9.5" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_B[9.6] !== "" ? (
        <td
          id="Ten 9.6"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 9.6", props.tableData.Race10.Group_B[9.6])}
        >
          {props.tableData.Race10.Group_B[9.6]}
        </td>
      ) : (
        <td id="Ten 9.6" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[10] !== "" ? (
        <td
          id="Ten 10"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 10", props.tableData.Race10.Group_C[10])}
        >
          {props.tableData.Race10.Group_C[10]}
        </td>
      ) : (
        <td id="Ten 10" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[11] !== "" ? (
        <td
          id="Ten 11"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 11", props.tableData.Race10.Group_C[11])}
        >
          {props.tableData.Race10.Group_C[11]}
        </td>
      ) : (
        <td id="Ten 11" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[12] !== "" ? (
        <td
          id="Ten 12"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 12", props.tableData.Race10.Group_C[12])}
        >
          {props.tableData.Race10.Group_C[12]}
        </td>
      ) : (
        <td id="Ten 12" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[13] !== "" ? (
        <td
          id="Ten 13"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 13", props.tableData.Race10.Group_C[13])}
        >
          {props.tableData.Race10.Group_C[13]}
        </td>
      ) : (
        <td id="Ten 13" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[14] !== "" ? (
        <td
          id="Ten 14"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 14", props.tableData.Race10.Group_C[14])}
        >
          {props.tableData.Race10.Group_C[14]}
        </td>
      ) : (
        <td id="Ten 14" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[15] !== "" ? (
        <td
          id="Ten 15"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 15", props.tableData.Race10.Group_C[15])}
        >
          {props.tableData.Race10.Group_C[15]}
        </td>
      ) : (
        <td id="Ten 15" style={{ height: "8vh", width: "4vw" }}></td>
      )}
      {props.tableData.Race10.Group_C[16] !== "" ? (
        <td
          id="Ten 16"
          style={{
            border: "1px solid black",
            height: "8vh",
            width: "4vw",
          }}
          onClick={() => props.handlePicks("Ten 16", props.tableData.Race10.Group_C[16])}
        >
          {props.tableData.Race10.Group_C[16]}
        </td>
      ) : (
        <td id="Ten 16" style={{ height: "8vh", width: "4vw" }}></td>
      )}
    </tr>
  );
}

export default TenthRow;
