import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductItem from '../product-item/ProductItem';
import './ProductsList.css';
import PageLoader from '../page-loader/PageLoader';
import { fetchProducts } from '../../redux/products/productActions';

function ProductsList() {
  const { getProducts } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    return !localStorage.getItem('savedData') && dispatch(fetchProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='products__container mt-5 d-flex flex-row flex-wrap justify-content-between'>
      {getProducts.isLoading ? <PageLoader /> : <ProductItem />}
    </section>
  );
}

export default ProductsList;
