import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import ProductsService from '../services/productsService';
import { FaCheck } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import Loader from '../components/Loader';
function SingleProductPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // 1. uzmi ID
  const { productId } = useParams();

  useEffect(() => {
    // 2. Poslati request.. Service
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  return (
    <div className="mt-[50px] px-[10px] py-5">
      {isLoading ? (
        <div className="container mx-auto flex items-start gap-5 flex-col md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-[50%]">
            <img
              className="h-[400px]"
              src={product.images[currentImage]}
              alt={product.title}
            />
            <div className="flex items-center gap-5 flex-wrap">
              {product.images.map((imgSrc, index) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-cover border-2 border-mainBlue rounded-xl mt-5"
                    src={imgSrc}
                    key={index}
                    onClick={() => handleCurrentImage(index)}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
          <div className="w-full md:w-[50%] flex flex-col gap-3">
            <h2 className="font-extrabold text-2xl text-mainBlue">
              {product.title}
            </h2>
            <span className="text-blueTextColor text-[20px]">
              $ {product.price}
            </span>
            <p className="flex-center gap-[10px]">
              <span className="text-balckTextColor text-[20px]">Reviews:</span>
              <Rating
                name="half-rating-read"
                defaultValue={product.rating}
                precision={0.5}
                readOnly
              />
            </p>
            <p className="flex items-center gap-[10px] text-[20px] text-blackTextColor">
              Availibility:
              {product.stock ? (
                <span className="flex-center text-lightGreen gap-[5px]">
                  <FaCheck /> In stock
                </span>
              ) : (
                <span className="flex-center text-mainRed gap-[5px]">
                  <RxCross2 size={24} /> Out of stock
                </span>
              )}
            </p>
            <p className="text-[20px] text-blackTextColor">
              Hurry up! only <span className="font-bold">{product.stock}</span>{' '}
              product left in stock!
            </p>
            <p className="text-[20px] text-blackTextColor">
              Total price:{' '}
              <span className="text-blueTextColor text-[20px]">
                {' '}
                ${product.price}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
