import { useSelector } from "react-redux";
import Loader from "../components/Loader";
Loader;
function ProductsPage() {
  const { singleProduct } = useSelector((state) => state.productStore);

  return (
    <div className="mt-5">
      <Loader />
      <h2>{singleProduct.title}</h2>
      <h2>{singleProduct.desc}</h2>
      <p>{singleProduct.price}</p>
    </div>
  );
}

export default ProductsPage;
