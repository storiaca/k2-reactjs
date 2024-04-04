export const INITIAL_STATE = {
  isLoading: false,
  error: false,
  products: [],
};

export const productsReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCH_START":
      return {
        isLoading: true,
        error: false,
        products: [],
      };
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        error: false,
        products: action.data,
      };
    case "FETCH_ERROR":
      return {
        isLoading: false,
        error: true,
        products: [],
      };
    default:
      return state;
  }
  // if (action.type === "FETCH_START") {
  //   return {
  //     isLoading: true,
  //     error: false,
  //     products: [],
  //   };
  // } else if (action.type === "FETCH_SUCCESS") {
  //   return {
  //     isLoading: false,
  //     error: false,
  //     products: action.data,
  //   };
  // } else if (action.type === "FETCH_ERROR") {
  //   return {
  //     isLoading: false,
  //     error: true,
  //     products: [],
  //   };
  // }
};
