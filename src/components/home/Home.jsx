import React from 'react';
import profileImage from '../../assets/images/profile-pic.jpg';
import './Home.css';

function Home() {
  return (
    <main className='text-center mt-5 pt-3'>
      <h1 className=' text-uppercase text-white mb-5'>who am i </h1>
      <div className='comntainer'>
        <div className='row '>
          <div className='about__me col-8 d-flex flex-column text-start ps-5 text-white mt-5'>
            <div className='text-capitalize fs-2 mb-2'>
              <span className='me-2  fw-bold'>name:</span>
              <span>waleed hassan elbana</span>
            </div>
            <div className='text-capitalize fs-2 mb-2'>
              <span className='me-2  fw-bold'>age:</span>
              <span>27</span>
            </div>
            <div className='text-capitalize fs-2 mb-2'>
              <span className='me-2  fw-bold'>job title:</span>
              <span>front-end web developer</span>
            </div>
            <div className='text-capitalize fs-2 mb-2'>
              <span className='me-2 fw-bold'>skills:</span>
              <span className='text-uppercase'>
                html, css, sass, bootstrap, javascript, jquery, react, angular
              </span>
            </div>
          </div>
          <figure className='col-4 mt-5'>
            <img src={profileImage} className='' alt='profile-pic' />
          </figure>
        </div>
      </div>
    </main>
  );
}

export default Home;
