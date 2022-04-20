import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  handleSearch: (keyword:string) => void;
};

const Search = (props: Props) => {
  const { handleSearch } = props;
  const [keyword, setKeyword] = useState("");

  const handleChange = (event: { target: { value: any } }) => {
    setKeyword(event.target.value);
  };

  return (
    <div className="Search">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={keyword}
        onChange={handleChange}
      />
      <span onClick={()=>handleSearch(keyword)}>
        <BsSearch style={{ cursor: "pointer" }} />
      </span>
    </div>
  );
};

export default Search;
