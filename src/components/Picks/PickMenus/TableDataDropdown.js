function TableDataDropdown(props) {
  return (
    <div class="dropdown">
      <span>{props.tableData.RaceID.name}</span>
      <div class="dropdown-content">
        <p
          value={props.BEL_10_29_21.RaceID.name}
          onClick={() => props.handleTableData(props.BEL_10_29_21)}
        >
          {props.BEL_10_29_21.RaceID.name}
        </p>
        <p
          value={props.KEE_10_29_21.RaceID.name}
          onClick={() => props.handleTableData(props.KEE_10_29_21)}
        >
          {props.KEE_10_29_21.RaceID.name}
        </p>
      </div>
    </div>
  );
}

export default TableDataDropdown;
