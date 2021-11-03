function CostRender(props) {
  const handleCalculation = () => {
    if (props.pickType === 3) {
      if (
        props.firstVals.length > 0 &&
        props.secondVals.length > 0 &&
        props.thirdVals.length > 0
      ) {
        props.setCalcValue(
          props.firstVals.length *
            props.secondVals.length *
            props.thirdVals.length
        );
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
      }
    } else if (props.pickType === 4) {
      if (
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
      }
    } else if (props.pickType === 5) {
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
      } else {
        alert("Not Enough Races Selected for a Pick 5!");
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
}

export default CostRender;
