import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductsService from "../services/productsService";

function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  useEffect(() => {
    ProductsService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
        toast.success("Data loaded!");
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mx-auto">
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
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
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
