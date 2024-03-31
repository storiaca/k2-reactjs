import { useState, useEffect } from "react";
import ProductsService from "../services/productsService";

function useFetch() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setData(res.data.products);
        setIsLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const createProduct = async (newProduct) => {
    try {
      const response = await ProductsService.createProduct(newProduct);
      setData([...data, response.data]);
    } catch (err) {
      console.error("Error creating product:", err);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await ProductsService.deleteProduct(productId);
      setData(data.filter((product) => product.id !== productId));
      console.log(data);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return { data, isLoading, createProduct, deleteProduct };
}

export default useFetch;
