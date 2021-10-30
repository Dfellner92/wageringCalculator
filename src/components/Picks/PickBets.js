import React, { useEffect, useState } from "react";

import BELMONT_PARK_OCT_29_2021 from "../../util/belmont-park-20211029";

const PickBets = () => {
  const { RaceID, BEL01, BEL02 } = BELMONT_PARK_OCT_29_2021;
  console.log(RaceID.name);


  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              1
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              2
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              3
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4.5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "lightgreen",
              }}
            >
              4.9
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              6
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              7
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              8
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9.5
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "#ccccff",
              }}
            >
              9.6
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              10
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              11
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              12
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              13
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              14
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              15
            </td>
            <td
              style={{
                border: "1px solid black",
                height: "5vh",
                width: "4vw",
                backgroundColor: "black",
                color: "white",
              }}
            >
              16
            </td>
          </tr>
          <tr>
            <td
              id="race_01"
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            >{RaceID.name + " " + BEL01.race.number}</td>
            <td
              id="01_1"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL01.Group_A[1]}</td>
            <td
              id="01_2"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_3"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_4"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_4.5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_4.9"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_6"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_7"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_8"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_9"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_9.5"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_9.6"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_10"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_11"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_12"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_13"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_14"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_15"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              id="01_16"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[1]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[2]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[3]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[4]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[4.5]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_A[4.9]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[5]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[6]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[7]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[8]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[9]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[9.5]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_B[9.6]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[10]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[11]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[12]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[13]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[14]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[15]}</td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            >{BEL02.Group_C[16]}</td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
          <tr>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
            <td
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PickBets;
