import React from "react";

function SingleCard({ product }) {
  return (
    <div className="bg-white dark:bg-slate-800 w-[250px] h-[400px] border">
      <img
        src={product.thumbnail}
        alt={product.description}
        className="w-[250px] min-h-48"
      />
      <div className="p-8">
        <h3>{product.title}</h3>
        <h4>{product.price}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}

export default SingleCard;
