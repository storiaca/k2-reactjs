import { useState } from 'react';

function SingleProductCardComponent({ product }) {
  const [indexImage, setIndexImage] = useState(0);

  function handleCurrentImage(index) {
    setIndexImage(index);
  }
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-5">
        <img src={product.images[indexImage]} alt={product.title} />
        <div className="flex items-center gap-3">
          {product.images.map((el, i) => {
            return (
              <img
                className="w-28 object-cover border border-gray-500"
                src={el}
                key={i}
                onClick={() => handleCurrentImage(i)}
              />
            );
          })}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default SingleProductCardComponent;
