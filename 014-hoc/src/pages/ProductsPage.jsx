import React from "react";
import useFetch from "../hooks/useFetch";

function ProductsPage() {
  const { data, isLoading, createProduct, deleteProduct } = useFetch();

  const handleCreateProduct = () => {
    const newProduct = { title: "Book", price: 10 };
    createProduct(newProduct);
  };

  const handleDeleteProduct = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl my-7">All Products</h2>
      <button
        className="p-2 bg-blue-500 text-white block my-4"
        onClick={handleCreateProduct}
      >
        Create Product
      </button>
      {isLoading ? (
        <>
          {data.map((el) => {
            return (
              <div key={el.id} onClick={() => handleDeleteProduct(el.id)}>
                {el.title}
              </div>
            );
          })}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default ProductsPage;
