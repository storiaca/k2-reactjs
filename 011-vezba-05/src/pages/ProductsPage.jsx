import { useEffect, useState } from "react";
import PostService from "../services/postService";
import SingleProductComponet from "../components/SingleProductComponet";

function ProductsPage() {
  const [singleProduct, setSingleProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    PostService.getSingleProduct()
      .then((res) => {
        setSingleProduct(res.data);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-6">Products Page</h2>
      {isLoading && <SingleProductComponet product={singleProduct} />}
    </div>
  );
}

export default ProductsPage;
