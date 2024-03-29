import React from "react";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  return (
    <div className="w-[300px] h-[300px] border-2 border-blue-400">
      <img
        className="h-[100px] w-full object-cover"
        src={product.thumbnail}
        alt={product.description}
      />

      <div className="p-3">
        <h3 className="text-2xl text-center text-blue-400 my-3">
          {product.title}
        </h3>
        <p className="text-2xl text-center text-blue-400">$ {product.price}</p>
        <div className="text-right mt-8">
          <Link
            className="p-2 bg-red-600 text-white"
            to={`/singleProduct/${product.id}`}
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
