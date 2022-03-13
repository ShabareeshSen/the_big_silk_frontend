import React from 'react';

import './ProductContainer.scss';
import ProductCard from '../ProductCard/ProductCard';

const ProductContainer = ({title,titleCenter,products}) => {
  return <div className='ProductContainer text-capitalize my-3 '>
      <h4 className={`h4 px-2 ${titleCenter ? "text-center h3 p-2":""}`}>{title}</h4>
      <div className='d-flex flex-wrap justify-content-center '>
        {
            products.map((product)=> <ProductCard key={product.id} product={product} />)
          }
      </div>
  </div>;
};

export default ProductContainer;
