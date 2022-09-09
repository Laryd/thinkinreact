import React, { useState } from "react";
import SearchBox from "./SearchBox";
import ProductTable from "./ProductTable";

const FilterableTable = ({ products }) => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInstockOnly] = useState(false);
  return (
    <>
      <div className="container bg-dark">
        <SearchBox
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={(text) => setFilterText(text)}
          onInStockChange={(stock) => setInstockOnly(stock)}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    </>
  );
};

export default FilterableTable;
