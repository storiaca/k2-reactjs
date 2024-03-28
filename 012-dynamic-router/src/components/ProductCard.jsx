import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ products }) {
  return (
    <div>
      {products.title}
      <Link to={`/products/${products.id}`}>Single</Link>
    </div>
  );
}

export default ProductCard;
