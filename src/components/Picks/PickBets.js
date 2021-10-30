import React, { useEffect, useState } from "react";

import BELMONT_PARK_OCT_29_2021 from "../../util/belmont-park-20211029";

const PickBets = () => {
  const { BEL01, BEL02 } = BELMONT_PARK_OCT_29_2021;
  console.log(BEL01);

  const updateTable = async () => {
    document.getElementById("01_1").innerHTML = await BEL01.Group_A[1];
    document.getElementById("01_2").innerHTML = await BEL01.Group_A[2];
    document.getElementById("01_3").innerHTML = await BEL01.Group_A[3];
    document.getElementById("01_4").innerHTML = await BEL01.Group_A[4];
    document.getElementById("01_4.5").innerHTML = await BEL01.Group_A[4.5];
    document.getElementById("01_4.9").innerHTML = await BEL01.Group_A[4.9];
    document.getElementById("01_5").innerHTML = await BEL01.Group_B[5];
    document.getElementById("01_6").innerHTML = await BEL01.Group_B[6];
    document.getElementById("01_7").innerHTML = await BEL01.Group_B[7];
  };

  useEffect(() => {
    updateTable();
  });

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
              style={{ border: "1px solid black", height: "8vh", width: "8vw" }}
            ></td>
            <td
              id="01_1"
              style={{ border: "1px solid black", height: "8vh", width: "4vw" }}
            ></td>
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
