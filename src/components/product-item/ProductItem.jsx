import { Link } from 'react-router-dom';
import React from 'react';
import './ProductItem.css';

function ProductItem(props) {
  const { id, title, price, description, image } = props.product;
  return (
    <div className='for__padding col-4'>
      <div className='product__item card'>
        <figure className='product__img'>
          <img src={image} className='card-img-top' alt='...' />
        </figure>
        <div className='product__body card-body text-center'>
          <h5 className='card-title'>{title.substring(0, 20)}...</h5>
          <p className='card-text'>{description.substring(0, 25)}...</p>
          <div className='fw-bold fs-4 mb-3'>$ {price}</div>
          <Link
            to={`/product-details/${id}`}
            className='product__details btn btn-primary text-capitalize w-50'>
            details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
