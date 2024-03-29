import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Rating from "@mui/material/Rating";

import ProductService from "../services/productsService";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(1);

  const [currentImage, setCurrentImage] = useState(0);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  function counterPlus() {
    if (counter < product.stock) {
      setCounter(counter + 1);
    }
  }

  function counterMinus() {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    ProductService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl my-8">Single product</h2>
      {isLoading ? (
        <div className="flex items-start justify-between gap-8">
          <div className="flex flex-col gap-6 flex-1 overflow-hidden">
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
            <div className="top border-b-2 border-black pr-5">
              <h3>{product.title}</h3>
              <h4> $ {product.price}</h4>
              <p>Review</p>
              <p>availability</p>
              <p>in stock</p>
            </div>
            <div className="bottom p-8 mt-8">
              <div className="flex items-center gap-3">
                Stock:
                {product.stock > 0 ? (
                  <p className="flex items-center gap-3 text-green-600">
                    In stock: {product.stock}
                    <FaCheck />
                  </p>
                ) : (
                  <p className="flex items-center gap-3 text-red-600">
                    Out of stock: {product.stock}
                    <ImCross />
                  </p>
                )}
              </div>
              <p>Brand: {product.brand}</p>

              <div className="flex items-center gap-3 my-5">
                <p>Rating:</p>
                <Rating
                  name="half-rating-read"
                  defaultValue={product.rating}
                  precision={0.5}
                  readOnly
                />
              </div>

              <div className="flex items-center my-4">
                <button className="p-2 bg-slate-500" onClick={counterMinus}>
                  -
                </button>
                <span className="p-2 bg-slate-500">{counter}</span>
                <button className="p-2 bg-slate-500" onClick={counterPlus}>
                  +
                </button>
              </div>

              <button className="p-2 bg-red-500 mr-2 rounded-md">
                Add to cart
              </button>
              <button className="p-2 bg-green-500 rounded-md">Favorite</button>
            </div>
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default SingleProductPage;
