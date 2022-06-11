const SearchInput = ({ handleSearch }) => (
  <div className="mt-3">
    <label className="mr-1" htmlFor="search">
      Search user by name
    </label>
    <input type="text" name="search" id="search" onChange={handleSearch} />
  </div>
);

export default SearchInput;
