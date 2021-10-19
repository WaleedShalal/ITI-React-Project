import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ProductDetails.css';
function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    getProductDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProductDetails = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductDetails(res));
  };

  const { title, price, category, description, image } = productDetails;
  return (
    <section className='text-center text-white mt-3'>
      <h1 className='text-capitalize mb-5'>full product details</h1>
      <div className='container'>
        <div className='row'>
          <figure className='product__details_img  col-4'>
            <img src={image} alt='product-img' />
          </figure>
          <div className=' offset-1 col-7 '>
            <div className='d-flex align-items-baseline'>
              <span className='text-capitalize fs-3 fw-bold'>title :</span>
              <p className='text-start fs-5 ms-3'>{title}</p>
            </div>
            <div className='d-flex flex-wrap'>
              <span className='text-capitalize fs-3 fw-bold'>
                description :
              </span>
              <p className='text-start fs-5'>{description}</p>
            </div>
            <div className='d-flex align-items-baseline'>
              <span className='text-capitalize fs-3 fw-bold'>category :</span>
              <div className='text-capitalize fs-5 text-start ms-3'>
                {category}
              </div>
            </div>
            <div className='d-flex align-items-baseline mb-5'>
              <span className='text-capitalize fs-3 fw-bold'>price :</span>
              <div className='text-capitalize fs-5 text-start ms-3'>
                $ {price}
              </div>
            </div>
            <Link
              to='/'
              className='product__details__back btn btn-primary text-capitalize w-25'>
              go back
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
