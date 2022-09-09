import React from "react";
import PropTypes from "prop-types";

const ProductCategory = ({ category }) => {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

ProductCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductCategory;
