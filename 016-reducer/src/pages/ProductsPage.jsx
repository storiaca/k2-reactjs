import { useSelector } from "react-redux";

function ProductsPage() {
  const { singleProduct } = useSelector((state) => state.productStore);

  return (
    <div className="mt-5">
      <h2>{singleProduct.title}</h2>
      <h2>{singleProduct.desc}</h2>
      <p>{singleProduct.price}</p>
    </div>
  );
}

export default ProductsPage;
