import axios from 'axios';

class ProductsService {
  static getAllCategories = () => axios.get('/products/categories');
  static getAllProducts = () => axios.get('/products');
  static getAllProductsByCategory = (category) =>
    axios.get(`/products/category/${category}`);
  static getSingleProduct = (id) => axios.get(`/products/${id}`);
}

export default ProductsService;
