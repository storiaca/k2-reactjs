import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategoryAction } from '../store/productSlice';
import ProductsService from '../services/productsService';

function CategoryComponent() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const { currentCategory } = useSelector((state) => state.productStore);

  useEffect(() => {
    ProductsService.getAllCategories()
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  function handleShowCategories() {
    setIsActive(!isActive);
  }

  return (
    <div className="bg-[#f4f4f4] p-5">
      <div className="container mx-auto flex items-center gap-7">
        <button
          onClick={handleShowCategories}
          className="bg-mainBlue text-whiteTextColor px-3 py-6 rounded-md cursor-pointer hover:bg-mainYellow transition-all duration-200"
        >
          Show Categories
        </button>
        {!isActive ? (
          <h2 className="uppercase text-3x text-mainYellow text-center">
            <span className="text-mainBlue">Selected category: </span>
            <br />
            {currentCategory}
          </h2>
        ) : null}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-[10px]">
          {isActive ? (
            <>
              <li
                className="text-whiteTextColor w-[250px] text-center rounded-lg px-4 py-2 cursor-pointer uppercase hover:bg-mainYellow transition-all duration-150"
                style={
                  'allProducts' === currentCategory
                    ? { backgroundColor: '#EDA415' }
                    : { backgroundColor: '#003F62' }
                }
                onClick={() => {
                  dispatch(setCurrentCategoryAction('allProducts'));
                  setIsActive(false);
                }}
              >
                All Categories
              </li>
              {categories.map((cat, i) => {
                return (
                  <li
                    className="text-whiteTextColor w-[250px] text-center rounded-lg px-4 py-2 cursor-pointer uppercase hover:bg-mainYellow transition-all duration-150"
                    style={
                      cat === currentCategory
                        ? { backgroundColor: '#EDA415' }
                        : { backgroundColor: '#003F62' }
                    }
                    key={i}
                    onClick={() => {
                      dispatch(setCurrentCategoryAction(cat));
                      setIsActive(false);
                    }}
                  >
                    {cat}
                  </li>
                );
              })}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default CategoryComponent;
