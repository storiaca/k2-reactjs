import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  handleAllProductAction,
  handleSingleProductAction,
} from "./store/productSlice";
import { Link, Outlet } from "react-router-dom";

import Loader from "./components/Loader";
import ShowInfo from "./components/ShowInfo";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  // function handleInfo() {
  //   dispatch(handleAllProductAction("Tihomir je ovde"));
  // }
  useEffect(() => {
    dispatch(
      handleSingleProductAction({
        title: "Single product",
        desc: "Bingo redux",
        price: "$9994",
      })
    );
  }, []);

  return (
    <div>
      <h1 className="mb-5 text-4xl text-green-600 font-bold">Redux Toolkit</h1>
      <ul className="flex items-center justify-center gap-3">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
      </ul>
      {/* <button
        className="px-4 py-2 bg-green-600 text-gray-50"
        onClick={handleInfo}
      >
        Send Info
      </button>
      <ShowInfo /> */}

      <Outlet />
    </div>
  );
}

export default App;
