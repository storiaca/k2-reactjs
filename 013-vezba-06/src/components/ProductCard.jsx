import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ products }) {
  return (
    <div className="w-[300px] h-[300px] border-gray-600 border-2">
      <img
        src={products.thumbnail}
        alt={products.title}
        className="h-[100px] object-cover w-full"
      />
      <div className="p-5">
        <h2>{products.title}</h2>
        <h3>$ {products.price}</h3>

        <div className="mt-16 text-right">
          <Link
            className="mt-3 p-2 bg-orange-500 text-white text-lg"
            to={`/singleProduct/${products.id}`}
          >
            Show more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
