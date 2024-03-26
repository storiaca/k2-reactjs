import { useState } from "react";

function SingleProductComponet({ product }) {
  const [currentImage, setCurrentImage] = useState(0);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  return (
    <div className="flex items-start justify-between gap-8">
      <div className="flex flex-col gap-6 flex-1">
        <img src={product.images[currentImage]} alt={product.title} />
        <div className="flex gap-2">
          {product.images.map((el, i) => {
            return (
              <img
                key={i}
                src={el}
                className="w-[20%] border border-gray-600 object-contain"
                onClick={() => handleCurrentImage(i)}
              />
            );
          })}
        </div>
      </div>
      <div className="content flex-1">
        <div className="border border-black p-8">
          <h3>{product.title}</h3>
          <h4>Price: $ {product.price}</h4>
          <p>Description: {product.description}</p>
        </div>
        <div className="p-8 mt-8">
          <p>Stock: {product.stock}</p>
          <p>Brand: {product.brand}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductComponet;
