import axios from "axios";

class ProductsService {
  static getAllProducts = () => axios.get("/products");
  static createProduct = (body) =>
    axios.post("/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        body,
      }),
    });
  static deleteProduct = (id) =>
    axios.delete(`/products/${id}`, {
      method: "DELETE",
    });
}

export default ProductsService;
