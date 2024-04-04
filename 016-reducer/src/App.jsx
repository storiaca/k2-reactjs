import { useReducer } from "react";
import Loader from "./components/Loader";

import ProductsService from "./services/productsService";

// reducer
import { productsReducer, INITIAL_STATE } from "./store/productsReducer";

import "./App.css";

function App() {
  const [state, dispatch] = useReducer(productsReducer, INITIAL_STATE);

  function handleData() {
    // fetch start
    dispatch({ type: "FETCH_START" });

    ProductsService.getAllProducts()
      .then((res) =>
        dispatch({ type: "FETCH_SUCCESS", data: res.data.products })
      )
      .catch((err) => dispatch({ type: "FETCH_ERROR" }));
  }

  // Greska ovde
  if (state.error) {
    return <h2>Tihomire imas gresku</h2>;
  }

  return (
    <div>
      <button onClick={handleData}>Fetch data</button>

      {state.isLoading ? (
        <Loader />
      ) : (
        <div className="container mx-auto">
          {state.products.map((el) => (
            <div key={el.id} className="text-center">
              <h2>{el.title}</h2>
              <img src={el.thumbnail} className="mx-auto" alt={el.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
