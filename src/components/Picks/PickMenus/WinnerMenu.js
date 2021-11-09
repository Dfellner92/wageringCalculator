function WinnerMenu(props) {
  return (
    <div class="dropdown">
      <span>Your Horse: {props.winner}</span>
      <div class="dropdown-content">
        <p value="1" onClick={() => props.handleWinner("1")}>
          1
        </p>
        <p value="1A" onClick={() => props.handleWinner("1A")}>
          1A
        </p>
        <p value="2" onClick={() => props.handleWinner("2")}>
          2
        </p>
        <p value="3" onClick={() => props.handleWinner("3")}>
          3
        </p>
        <p value="4" onClick={() => props.handleWinner("4")}>
          4
        </p>
        <p value="5" onClick={() => props.handleWinner("5")}>
          5
        </p>
        <p value="6" onClick={() => props.handleWinner("6")}>
          6
        </p>
        <p value="7" onClick={() => props.handleWinner("7")}>
          7
        </p>
        <p value="8" onClick={() => props.handleWinner("8")}>
          8
        </p>
        <p value="9" onClick={() => props.handleWinner("9")}>
          9
        </p>
        <p value="10" onClick={() => props.handleWinner("10")}>
          10
        </p>
        <p value="11" onClick={() => props.handleWinner("11")}>
          11
        </p>
        <p value="12" onClick={() => props.handleWinner("12")}>
          12
        </p>
        <p value="13" onClick={() => props.handleWinner("13")}>
          13
        </p>
        <p value="14" onClick={() => props.handleWinner("14")}>
          14
        </p>
        <p value="15" onClick={() => props.handleWinner("15")}>
          15
        </p>
      </div>
    </div>
  );
}

export default WinnerMenu;
