import React, { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash.debounce";

type Props = {
  handleSearch: (keyword: string) => void;
};

const Search = (props: Props) => {
  const { handleSearch } = props;
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    debouncedChangeHandler.cancel();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
    handleSearch(event.target.value);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(handleChange, 300);
  }, [keyword, handleSearch]);

  return (
    <div className="Search">
      <input
        type="text"
        name="search"
        placeholder="Search"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
};

export default Search;
