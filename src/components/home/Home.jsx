import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ProductItem from '../product-item/ProductItem';
import './Home.css';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    localStorage.getItem('savedData')
      ? setData(JSON.parse(localStorage.getItem('savedData')))
      : fetch('https://fakestoreapi.com/products')
          .then((res) => res.json())
          .then((res) => {
            setData(res);
            localStorage.setItem('savedData', JSON.stringify(res));
          });
  };
  return (
    <section className='products__container mt-5 d-flex flex-row flex-wrap justify-content-between'>
      {data.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Home;
