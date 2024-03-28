import { useState, useEffect } from "react";
import ProductsService from "../services/productsService";

function useProductsData() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await ProductsService.getAllProducts();
        setAllData(res.data.products);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { allData, isLoading };
}

export default useProductsData;
