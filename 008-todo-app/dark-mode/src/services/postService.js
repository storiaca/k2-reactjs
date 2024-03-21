import axios from "axios";

class PostService {
  static getAllProducts = () => axios.get("https://dummyjson.com/products");
}

export default PostService;
