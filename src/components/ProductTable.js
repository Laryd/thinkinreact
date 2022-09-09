import React from "react";
import ProductCategory from "./ProductCategory";
import ProductRow from "./ProductRow";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const rows = [];
  let lastCategory = null;
  products.forEach((product) => {
    if (product.name.indexOf(filterText) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategory category={product.category} key={product.category} />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

ProductTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductTable;
