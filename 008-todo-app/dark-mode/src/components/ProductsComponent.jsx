import { useEffect, useState } from "react";
import PostService from "../services/postService";
import SingleCard from "./SingleCard";
import TitleComponent from "./TitleComponent";

function ProductsComponent() {
  const [allProducst, setAllProducts] = useState([]);

  useEffect(() => {
    PostService.getAllProducts()
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white dark:bg-slate-600">
      <div className="conatiner mx-auto">
        <TitleComponent>
          <h2 className="text-lg text-center my-2">All My Products</h2>
        </TitleComponent>
        <div className="flex flex-wrap gap-4 justify-center">
          {allProducst.map((product) => (
            <SingleCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsComponent;
