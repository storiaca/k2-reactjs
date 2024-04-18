import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '@clerk/clerk-react';
import Loader from '../components/Loader';
import ProductsService from '../services/productsService';
import { saveAllProductsAction } from '../store/productSlice';
import CardProductComponent from '../components/CardProductComponent';

function HomePage() {
  const dispatch = useDispatch();
  const { allProducts, currentCategory } = useSelector(
    (state) => state.productStore,
  );
  const [isLoaded, setIsLoaded] = useState(false);
  // const { isSignedIn, user, isLoaded } = useUser();
  // if (!isLoaded) {
  //   // Handle loading state however you like
  //   return null;
  // }

  // if (isSignedIn) {
  //   console.log(user);
  // }

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response;
  //       if (currentCategory === 'allProducts') {
  //         response = await ProductsService.getAllProducts();
  //       } else {
  //         response = await ProductsService.getAllProductsByCategory(currentCategory);
  //       }
  //       dispatch(saveAllProductsAction(response.data.products));
  //       setIsLoaded(true);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();

  // }, [currentCategory]);

  useEffect(() => {
    if (currentCategory === 'allProducts') {
      ProductsService.getAllProducts()
        .then((res) => {
          dispatch(saveAllProductsAction(res.data.products));
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    } else {
      ProductsService.getAllProductsByCategory(currentCategory)
        .then((res) => {
          dispatch(saveAllProductsAction(res.data.products));
          setIsLoaded(true);
        })
        .catch((err) => console.log(err));
    }
  }, [currentCategory]);

  return (
    <main className="container mx-auto">
      {/* grid/list view */}

      {/* Our products */}
      <div className="flex flex-wrap items-center justify-center mt-12 gap-8">
        {isLoaded ? (
          allProducts.map((product) => {
            return <CardProductComponent key={product.id} product={product} />;
          })
        ) : (
          <div className="flex">
            <Loader />
          </div>
        )}
      </div>
    </main>
  );
}

export default HomePage;
