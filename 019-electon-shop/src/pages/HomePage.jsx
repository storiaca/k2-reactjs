import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '@clerk/clerk-react';

import ProductsService from '../services/productsService';
import { saveAllProductsAction } from '../store/productsSlice';

function HomePage() {
  const dispatch = useDispatch();
  // const { isSignedIn, user, isLoaded } = useUser();
  // if (!isLoaded) {
  //   // Handle loading state however you like
  //   return null;
  // }

  // if (isSignedIn) {
  //   console.log(user);
  // }
  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => dispatch(saveAllProductsAction(res.data.products)))
      .catch((err) => console.log(err));
  }, []);
  return <div>HomePage</div>;
}

export default HomePage;
