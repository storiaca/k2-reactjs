import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProductsService from "../services/productsService";
import ProductCard from "../components/ProductCard";

function ProductsPage() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    ProductsService.getAllProducts()
      .then((res) => {
        setAllData(res.data.products);
        setIsLoading(true);
        toast.success("Data loaded!");
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center container mx-auto flex-wrap gap-4">
          {allData.map((el) => (
            <ProductCard key={el.id} products={el} />
          ))}
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default ProductsPage;
