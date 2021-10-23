import * as actionTypes from './productTypes';
const initialState = {
  isLoading: false,
  products: [],
  errors: '',
};

export const fetchProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      localStorage.setItem('savedData', JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case actionTypes.FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        products: [],
        errors: action.payload,
      };
    default:
      return state;
  }
};
