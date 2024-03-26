import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PostsService from '../services/postsService';
import SingleProductCardComponent from './SingleProductCardComponent';

function ProductsPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    PostsService.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
        toast.success('Data loaded');
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container mx-auto">
      <h2 className="uppercase text-2xl">Single product</h2>
      {isLoading && <SingleProductCardComponent product={singleProduct} />}
    </div>
  );
}

export default ProductsPage;
