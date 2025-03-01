import { useState } from "react";
import { FILTER_OPTIONS } from "../constants";

const FilterTodo = ({ filter }) => {
  const [selectValue, setSelectValue] = useState("ALL");

  const updateSelectedOption = (e) => {
    setSelectValue(e.target.value);
    filter(e.target.value);
  };

  return (
    <select
      className="filterselect"
      value={selectValue}
      onChange={updateSelectedOption}
    >
      {FILTER_OPTIONS.map((options) => {
        console.log(options);
        return <option value={options.value}>{options.name}</option>;
      })}
      {/* <option value="ALL">ALL</option>
      <option value="Completed">Completed</option>
      <option value="Active">Active</option> */}
    </select>
  );
};
export default FilterTodo;
