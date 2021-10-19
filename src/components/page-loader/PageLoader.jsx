import './PageLoader.css';

function PageLoader() {
  return (
    <div className='page__loader text-center text-white d-flex flex-column align-items-center justify-content-center'>
      <div className=''>loading...</div>
      <div className='loading__shape spinner-border' role='status'></div>
    </div>
  );
}

export default PageLoader;
