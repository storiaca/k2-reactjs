import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Loader from '../components/Loader';
import ProductsService from '../services/productsService';
import Rating from '@mui/material/Rating';

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

  return (
    <div className="container mx-auto mt-14 pb-10">
      {isLoading ? (
        <div className="flex gap-5">
          <div className="">
            <img src={product.images[currentImage]} alt="" />
            <div className="mt-5 flex-center gap-1">
              {product.images.map((imgSrc, index) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-cover border border-mainBlue"
                    key={index}
                    src={imgSrc}
                  />
                );
              })}
            </div>
          </div>
          <div className="">Desno</div>
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
