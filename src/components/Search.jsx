import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="text-center mt-8">
      <input
        type="text"
        value={searchValue}
        placeholder="Search a movie"
        className="p-2 rounded-lg outline-green-700 placeholder:text-gray-100 bg-green-700 opacity-40 border border-green-800"
      />
      <button className="mx-2 py-3 px-4 bg-gradient-to-br from-teal-700 to-green-700 rounded-lg">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
};

export default Search;
