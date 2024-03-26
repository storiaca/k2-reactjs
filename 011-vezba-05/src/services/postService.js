import axios from "axios";

class PostService {
  static getSingleProduct = () => axios.get("https://dummyjson.com/products/8");
}

export default PostService;
