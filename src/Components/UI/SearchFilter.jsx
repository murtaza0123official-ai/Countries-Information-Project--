import "./SearchFilter.css";

export const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const sortCountries = (order) => {
    const sorted = [...countries].sort((a, b) => {
      return order === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sorted);
  };

  return (
    <section className="SearchFilter Container">
      {/* Search Input */}
      <div className="Search-Input">
        <input
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={handleInputChange}
        />
      </div>

      {/* Sort Buttons */}
      <div className="buttons">
        <button className="asc" onClick={() => sortCountries("asc")}>
          Ascending
        </button>
        <button className="dec" onClick={() => sortCountries("desc")}>
          Descending
        </button>
      </div>

      {/* Filter Dropdown */}
      <div className="Filter-Input">
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
