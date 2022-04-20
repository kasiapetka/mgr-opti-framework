import React from "react";
import { useModalContext } from "../context/modal-context";

type Props = {};

const FilterDetails = (props: Props) => {
  const { setIsVisible } = useModalContext();

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <h1>Filter Details</h1>
      <button type="button" onClick={handleCloseModal}>
        Close
      </button>
    </div>
  );
};

export default FilterDetails;
