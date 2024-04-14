import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsService from '../services/productsService';
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

  return (
    <div>
      {isLoading ? (
        <div>
          {/* Left side */}
          <div className="">
            <img src={product.images[currentImage]} alt={product.title} />
            <div className="flex items-center gap-5">
              {product.images.map((imgSrc, index) => {
                return (
                  <img
                    className="w-[100px] h-[100px] object-contain"
                    src={imgSrc}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
          {/* right side */}
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
