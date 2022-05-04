import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";

type Props = {
  show: boolean;
  handleToggle: (toggle: boolean) => void;
};

const Filter = (props: Props) => {
  const handleFilter = () => {
    props.handleToggle(!props.show);
  };

  return (
    <div className="Filter">
      <button onClick={handleFilter} type="button">
        <label>
          <BsFilter />
        </label>
        Filters
      </button>
    </div>
  );
};

export default Filter;
