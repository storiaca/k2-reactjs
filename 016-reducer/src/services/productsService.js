import axios from "axios";

class ProductsService {
  static getAllProducts = () => axios.get("https://dummyjson.com/products");
}

export default ProductsService;
