import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import ProductsService from '../services/productsService';
import Rating from '@mui/material/Rating';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import { CiHeart } from 'react-icons/ci';
import { saveCartAction } from '../store/cartSlice';

function SingleProductPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsService.getSingleProduct(productId)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCurrentImage(img) {
    setCurrentImage(img);
  }

  return (
    <div className="container mx-auto gap-5 mt-14 pb-10">
      {isLoading ? (
        <div className="flex gap-5">
          <div className="">
            <img src={product.images[currentImage]} alt="" />
            <div className="mt-5 flex-center flex-wrap gap-1">
              {product.images.map((imgSrc, index) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-cover border border-mainBlue"
                    key={index}
                    src={imgSrc}
                    onClick={() => handleCurrentImage(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl text-mainBlue">{product.title}</h2>
            <h3 className="text-2xl text-red-500">${product.price}</h3>
            <Rating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.5}
              readOnly
            />

            <h4 className="flex-center gap-3 ">
              Availability:{' '}
              {product.stock ? (
                <span className="flex-center gap-2 text-lightGreen">
                  <FaCheck /> In Stock
                </span>
              ) : (
                <span className="flex-center gap-2 text-red-600">
                  <ImCross /> Out of stock
                </span>
              )}
            </h4>

            <p>
              Hurry up! only{' '}
              <span className="text-lightGreen">{product.stock}</span> product
              left in stock!
            </p>

            <h4 className="flex-center gap-2 font-bold text-mainBlue">
              Total price: ${product.price}
            </h4>

            <div className="flex-center gap-3">
              <Link
                to="/cart"
                onClick={() => dispatch(saveCartAction(product))}
                className="px-4 py-2 bg-mainYellow text-black rounded-lg"
              >
                Add to cart
              </Link>
              <Link
                to="/favorite"
                className="px-4 py-2 bg-mainYellow text-black rounded-lg"
              >
                <CiHeart size={26} />
              </Link>
            </div>
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
