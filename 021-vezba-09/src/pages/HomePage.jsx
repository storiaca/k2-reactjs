import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import ProductsService from '../services/productsService';
import { saveProductsAction } from '../store/productSlice';
import SingleProductComponent from '../components/SingleProductComponent';

function HomePage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { products, currentCategory } = useSelector(
    (state) => state.productStore,
  );

  useEffect(() => {
    if (currentCategory === 'allProducts') {
      ProductsService.getAllProducts()
        .then((res) => {
          dispatch(saveProductsAction(res.data.products));
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    } else {
      ProductsService.getAllProductsByCategory(currentCategory)
        .then((res) => {
          dispatch(saveProductsAction(res.data.products));
          setIsLoading(true);
        })
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <div className="mt-12 container mx-auto">
      {isLoading ? (
        <div className="flex-center flex-wrap gap-[10px] justify-center">
          {products.map((product) => {
            return (
              <SingleProductComponent key={product.id} product={product} />
            );
          })}
        </div>
      ) : (
        <div className="flex">
          <Loader />
        </div>
      )}
    </div>
  );
}

export default HomePage;
