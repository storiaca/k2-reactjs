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
    <div className="bg-white dark:text-white dark:bg-midnight py-4">
      <div className="container mx-auto">
        <TitleComponent>
          <h1 className="text-lg md:text-[2.5rem] text-center my-8 dark:text-white">
            All My Products
          </h1>
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
