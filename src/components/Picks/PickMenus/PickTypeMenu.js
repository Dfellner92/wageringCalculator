function PickTypeMenu(props) {
  return (
    <div class="dropdown">
      <span>Pick {props.pickType}</span>
      <div class="dropdown-content">
        <p onClick={() => props.handlePickType(3)}>Pick 3</p>
        <p onClick={() => props.handlePickType(4)}>Pick 4</p>
        <p onClick={() => props.handlePickType(5)}>Pick 5</p>
      </div>
    </div>
  );
}

export default PickTypeMenu;
