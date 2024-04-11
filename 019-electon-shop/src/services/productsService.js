import axios from 'axios';

class ProductsService {
  static getAllCategories = () => axios.get('/products/categories');
}

export default ProductsService;
