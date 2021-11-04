function PickTypeMenu(props) {
  return (
    <div class="dropdown">
      {props.pickType === 3 ||
      props.pickType === 4 ||
      props.pickType === 5 ||
      props.pickType === 6 ? (
        <span>Pick {props.pickType}</span>
      ) : (
        <span>Daily Double</span>
      )}
      <div class="dropdown-content">
        <p onClick={() => props.handlePickType(2)}>Daily Double</p>
        <p onClick={() => props.handlePickType(3)}>Pick 3</p>
        <p onClick={() => props.handlePickType(4)}>Pick 4</p>
        <p onClick={() => props.handlePickType(5)}>Pick 5</p>
        <p onClick={() => props.handlePickType(6)}>Pick 6</p>
      </div>
    </div>
  );
}

export default PickTypeMenu;
