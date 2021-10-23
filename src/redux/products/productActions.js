import * as actionTypes from './productTypes';
import axios from 'axios';

export const fetchProductsRequest = () => {
  return {
    type: actionTypes.FETCH_PRODUCTS_REQUEST,
  };
};

export const fetchProductsSuccess = (items) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: items,
  };
};

export const fetchProductsFailure = (errors) => {
  return {
    type: actionTypes.FETCH_PRODUCTS_FAILURE,
    payload: errors,
  };
};

export const fetchProducts = () => {
  return (dispatch) => {
    dispatch(fetchProductsRequest());
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        const items = res.data;
        dispatch(fetchProductsSuccess(items));
      })
      .catch((error) => {
        const errors = error.message;
        dispatch(fetchProductsFailure(errors));
      });
  };
};
