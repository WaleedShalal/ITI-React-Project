import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductItem from '../product-item/ProductItem';
import './Home.css';
import PageLoader from './../page-loader/PageLoader';

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLpoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setIsLpoading(true);
    if (localStorage.getItem('savedData')) {
      setData(JSON.parse(localStorage.getItem('savedData')));
      setIsLpoading(false);
    } else {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          setIsLpoading(false);
          localStorage.setItem('savedData', JSON.stringify(res));
        });
    }
  };
  return (
    <section className='products__container mt-5 d-flex flex-row flex-wrap justify-content-between'>
      {isLoading ? (
        <PageLoader />
      ) : (
        data.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      )}
    </section>
  );
}

export default Home;
