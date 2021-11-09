const CostRender = (props) => {
  const handleIsAWin = () => {
    if (props.totalWinningPicks.length === props.pickType) {
      props.setIsAWin(true);
    } else {
      props.setIsAWin(false);
    }
  };

  const handleCalculation = () => {
    // DAILY DOUBLE LOGIC
    if (props.pickType === 2) {
      if (
        (props.firstVals.length > 0 &&
          props.secondVals.length > 0 &&
          props.thirdVals.length > 0) ||
        (props.secondVals.length > 0 &&
          props.thirdVals.length > 0 &&
          props.fourthVals.length > 0) ||
        (props.thirdVals.length > 0 &&
          props.fourthVals.length > 0 &&
          props.fifthVals.length > 0) ||
        (props.fourthVals.length > 0 &&
          props.fifthVals.length > 0 &&
          props.sixthVals.length > 0) ||
        (props.fifthVals.length > 0 &&
          props.sixthVals.length > 0 &&
          props.seventhVals.length > 0) ||
        (props.sixthVals.length > 0 &&
          props.seventhVals.length > 0 &&
          props.eighthVals.length > 0) ||
        (props.seventhVals.length > 0 &&
          props.eighthVals.length > 0 &&
          props.ninthVals.length > 0) ||
        (props.eighthVals.length > 0 &&
          props.ninthVals.length > 0 &&
          props.tenthVals.length > 0)
      ) {
        alert("One Bet at a time please!");
      } else if (props.firstVals.length > 0 && props.secondVals.length > 0) {
        props.setCalcValue(props.firstVals.length * props.secondVals.length);
        handleIsAWin();
      } else if (props.secondVals.length > 0 && props.thirdVals.length > 0) {
        props.setCalcValue(props.secondVals.length * props.thirdVals.length);
        handleIsAWin();
      } else if (props.thirdVals.length > 0 && props.fourthVals.length > 0) {
        props.setCalcValue(props.thirdVals.length * props.fourthVals.length);
        handleIsAWin();
      } else if (props.fourthVals.length > 0 && props.fifthVals.length > 0) {
        props.setCalcValue(props.fourthVals.length * props.fifthVals.length);
        handleIsAWin();
      } else if (props.fifthVals.length > 0 && props.sixthVals.length > 0) {
        props.setCalcValue(props.fifthVals.length * props.sixthVals.length);
        handleIsAWin();
      } else if (props.sixthVals.length > 0 && props.seventhVals.length > 0) {
        props.setCalcValue(props.sixthVals.length * props.seventhVals.length);
        handleIsAWin();
      } else if (props.seventhVals.length > 0 && props.eighthVals.length > 0) {
        props.setCalcValue(props.seventhVals.length * props.eighthVals.length);
        handleIsAWin();
      } else if (props.eighthVals.length > 0 && props.ninthVals.length > 0) {
        props.setCalcValue(props.eighthVals.length * props.ninthVals.length);
        handleIsAWin();
      } else if (props.ninthVals.length > 0 && props.tenthVals.length > 0) {
        props.setCalcValue(props.ninthVals.length * props.tenthVals.length);
        handleIsAWin();
      } else if (
        props.firstVals.length > 0 ||
        props.secondVals.length > 0 ||
        props.thirdVals.length > 0 ||
        props.fourthVals.length > 0 ||
        props.fifthVals.length > 0 ||
        props.sixthVals.length > 0 ||
        props.seventhVals.length > 0 ||
        props.eighthVals.length > 0 ||
        props.ninthVals.length > 0 ||
        props.tenthVals.length > 0
      ) {
        alert("Make a Selection from an Adjacent Race!");
      }
    }
    // PICK 3 LOGIC
    else if (props.pickType === 3) {
      if (
        (props.firstVals.length > 0 &&
          props.secondVals.length > 0 &&
          props.thirdVals.length > 0 &&
          props.fourthVals.length > 0) ||
        (props.secondVals.length > 0 &&
          props.thirdVals.length > 0 &&
          props.fourthVals.length > 0 &&
          props.fifthVals.length > 0) ||
        (props.thirdVals.length > 0 &&
          props.fourthVals.length > 0 &&
          props.fifthVals.length > 0 &&
          props.sixthVals.length > 0) ||
        (props.fourthVals.length > 0 &&
          props.fifthVals.length > 0 &&
          props.sixthVals.length > 0 &&
          props.seventhVals.length) ||
        (props.fifthVals.length > 0 &&
          props.sixthVals.length > 0 &&
          props.seventhVals.length > 0 &&
          props.eighthVals.length > 0) ||
        (props.sixthVals.length > 0 &&
          props.seventhVals.length > 0 &&
          props.eighthVals.length > 0 &&
          props.ninthVals.length > 0) ||
        (props.seventhVals.length > 0 &&
          props.eighthVals.length > 0 &&
          props.ninthVals.length > 0 &&
          props.tenthVals.length > 0)
      ) {
        alert("One Bet at a time please!");
      } else if (
        props.firstVals.length > 0 &&
        props.secondVals.length > 0 &&
        props.thirdVals.length > 0
      ) {
        props.setCalcValue(
          props.firstVals.length *
            props.secondVals.length *
            props.thirdVals.length
        );
        handleIsAWin();
      } else if (
        props.secondVals.length > 0 &&
        props.thirdVals.length > 0 &&
        props.fourthVals.length > 0
      ) {
        props.setCalcValue(
          props.secondVals.length *
            props.thirdVals.length *
            props.fourthVals.length
        );
        handleIsAWin();
      } else if (
        props.thirdVals.length > 0 &&
        props.fourthVals.length > 0 &&
        props.fifthVals.length > 0
      ) {
        props.setCalcValue(
          props.thirdVals.length *
            props.fourthVals.length *
            props.fifthVals.length
        );
        handleIsAWin();
      } else if (
        props.fourthVals.length > 0 &&
        props.fifthVals.length > 0 &&
        props.sixthVals.length > 0
      ) {
        props.setCalcValue(
          props.fourthVals.length *
            props.fifthVals.length *
            props.sixthVals.length
        );
        handleIsAWin();
      } else if (
        props.fifthVals.length > 0 &&
        props.sixthVals.length > 0 &&
        props.seventhVals.length > 0
      ) {
        props.setCalcValue(
          props.fifthVals.length *
            props.sixthVals.length *
            props.seventhVals.length
        );
        handleIsAWin();
      } else if (
        props.sixthVals.length > 0 &&
        props.seventhVals.length > 0 &&
        props.eighthVals.length > 0
      ) {
        props.setCalcValue(
          props.sixthVals.length *
            props.seventhVals.length *
            props.eighthVals.length
        );
        handleIsAWin();
      } else if (
        props.seventhVals.length > 0 &&
        props.eighthVals.length > 0 &&
        props.ninthVals.length > 0
      ) {
        props.setCalcValue(
          props.seventhVals.length *
            props.eighthVals.length *
            props.ninthVals.length
        );
        handleIsAWin();
      } else if (
        props.eighthVals.length > 0 &&
        props.ninthVals.length > 0 &&
        props.tenthVals.length > 0
      ) {
        props.setCalcValue(
          props.eighthVals.length *
            props.ninthVals.length *
            props.tenthVals.length
        );
        handleIsAWin();
      } else if (
        props.firstVals.length > 0 ||
        props.secondVals.length > 0 ||
        props.thirdVals.length > 0 ||
        props.fourthVals.length > 0 ||
        props.fifthVals.length > 0 ||
        props.sixthVals.length > 0 ||
        props.seventhVals.length > 0 ||
        props.eighthVals.length > 0 ||
        props.ninthVals.length > 0 ||
        props.tenthVals.length > 0 ||
        (props.firstVals.length > 0 && props.secondVals.length > 0) ||
        (props.secondVals.length > 0 && props.thirdVals.length > 0) ||
        (props.thirdVals.length > 0 && props.fourthVals.length > 0) ||
        (props.fourthVals.length > 0 && props.fifthVals.length > 0) ||
        (props.fifthVals.length > 0 && props.sixthVals.length > 0) ||
        (props.sixthVals.length > 0 && props.seventhVals.length > 0) ||
        (props.seventhVals.length > 0 && props.eighthVals.length > 0) ||
        (props.eighthVals.length > 0 && props.ninthVals.length > 0) ||
        (props.ninthVals.length > 0 && props.tenthVals.length > 0)
      ) {
        alert("Not Enough Races Selected for a Pick 3!");
      }
    }
    // PICK 4 LOGIC
    else if (props.pickType === 4) {
      if (props.dataLength === 10) {
        if (
          props.secondVals.length > 0 &&
          props.thirdVals.length > 0 &&
          props.fourthVals.length > 0 &&
          props.fifthVals.length > 0 &&
          props.seventhVals.length > 0 &&
          props.eighthVals.length > 0 &&
          props.ninthVals.length > 0 &&
          props.tenthVals.length > 0
        ) {
          alert("One bet at a time please!");
        } else if (
          props.secondVals.length > 0 &&
          props.thirdVals.length > 0 &&
          props.fourthVals.length > 0 &&
          props.fifthVals.length > 0
        ) {
          props.setCalcValue(
            props.secondVals.length *
              props.thirdVals.length *
              props.fourthVals.length *
              props.fifthVals.length
          );
          handleIsAWin();
        } else if (
          props.seventhVals.length > 0 &&
          props.eighthVals.length > 0 &&
          props.ninthVals.length > 0 &&
          props.tenthVals.length > 0
        ) {
          props.setCalcValue(
            props.seventhVals.length *
              props.eighthVals.length *
              props.ninthVals.length *
              props.tenthVals.length
          );
          handleIsAWin();
        }
      } else {
        alert("Not Enough Races Selected for a Pick 4!");
      }
    }
    // PICK 5 LOGIC
    else if (props.pickType === 5) {
      if (
        props.firstVals.length > 0 &&
        props.secondVals.length > 0 &&
        props.thirdVals.length > 0 &&
        props.fourthVals.length > 0 &&
        props.fifthVals.length > 0 &&
        props.sixthVals.length > 0 &&
        props.seventhVals.length > 0 &&
        props.eighthVals.length > 0 &&
        props.ninthVals.length > 0 &&
        props.tenthVals.length > 0
      ) {
        alert("One bet at a time!");
      } else if (
        props.firstVals.length > 0 &&
        props.secondVals.length > 0 &&
        props.thirdVals.length > 0 &&
        props.fourthVals.length > 0 &&
        props.fifthVals.length > 0
      ) {
        props.setCalcValue(
          props.firstVals.length *
            props.secondVals.length *
            props.thirdVals.length *
            props.fourthVals.length *
            props.fifthVals.length
        );
        handleIsAWin();
      } else if (
        props.sixthVals.length > 0 &&
        props.seventhVals.length > 0 &&
        props.eighthVals.length > 0 &&
        props.ninthVals.length > 0 &&
        props.tenthVals.length > 0
      ) {
        props.setCalcValue(
          props.sixthVals.length *
            props.seventhVals.length *
            props.eighthVals.length *
            props.ninthVals.length *
            props.tenthVals.length
        );
        handleIsAWin();
      } else {
        alert("Not Enough Races Selected for a Pick 5!");
      }
    }
    // PICK 6 LOGIC
    else if (props.pickType === 6) {
      if (
        props.fifthVals.length > 0 &&
        props.sixthVals.length > 0 &&
        props.seventhVals.length > 0 &&
        props.eighthVals.length > 0 &&
        props.ninthVals.length > 0 &&
        props.tenthVals.length > 0
      ) {
        props.setCalcValue(
          props.fifthVals.length *
            props.sixthVals.length *
            props.seventhVals.length *
            props.eighthVals.length *
            props.ninthVals.length *
            props.tenthVals.length
        );
        handleIsAWin();
      } else {
        alert("Not Enough Races Selected for a Pick 6!");
      }
    }
  };

  return (
    <div className="cost-block">
      <button
        className="cost-block__button"
        onClick={() => handleCalculation()}
      >
        Calculate Wage Cost
      </button>
      <div id="cost-value" className="cost-block__value">
        ${props.calcValue}.00
      </div>
    </div>
  );
};

export default CostRender;
