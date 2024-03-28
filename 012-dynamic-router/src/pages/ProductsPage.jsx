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
    <div>
      {isLoading ? (
        allData.map((el) => <ProductCard key={el.id} products={el} />)
      ) : (
        <h2>Loading..</h2>
      )}
    </div>
  );
}

export default ProductsPage;
