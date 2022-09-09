import React from "react";

const SearchBox = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) => {
  return (
    <div className="container">
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        <p className="text-light">
          <span>
            <input
              className="form-check"
              type="checkbox"
              value={inStockOnly}
              onChange={(e) => onInStockChange(e.target.value)}
            />{" "}
            Only Show Products in stock
          </span>
        </p>
      </form>
    </div>
  );
};

export default SearchBox;
