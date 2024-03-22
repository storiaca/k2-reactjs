import React from "react";

function SingleCard({ product }) {
  return (
    <div className="bg-white dark:text-white dark:bg-midnight w-[250px] h-[400px] border rounded-2xl">
      <img
        src={product.thumbnail}
        alt={product.description}
        className="rounded-t-2xl h-[150px] w-full object-cover"
      />
      <div className="p-8">
        <h3 className="text-lg mb-2">{product.title}</h3>
        <h4 className="text-[16px] mb-2">$ {product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default SingleCard;
