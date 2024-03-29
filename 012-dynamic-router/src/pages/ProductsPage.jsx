import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductsService from "../services/productsService";
//import useProductsData from "../hooks/useProductsData";

function ProductsPage() {
  //const { allData, isLoading } = useProductsData();
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setAllData(res.data.products);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h2 className="text-center text-3xl my-7">All Products</h2>
      <div className="container mx-auto flex flex-wrap gap-5 justify-center">
        {isLoading ? (
          allData.map((el) => <ProductCard key={el.id} product={el} />)
        ) : (
          <h2>Loading..</h2>
        )}
      </div>
    </>
  );
}

export default ProductsPage;
