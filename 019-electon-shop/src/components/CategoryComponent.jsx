import { useState, useEffect } from 'react';
import ProductService from '../services/productsService';

function CategoryComponent() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    ProductService.getAllCategories()
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div>CategoryComponent</div>;
}

export default CategoryComponent;
