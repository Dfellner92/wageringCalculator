function CostRender(props) {
  return (
    <div className="cost-block">
      <button
        className="cost-block__button"
        onClick={() => props.handleCalculation()}
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
