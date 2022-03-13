import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AddToCartButton, SoldOut } from '../Buttons/Buttons';
import './ProductCard.scss';

const ProductCard = ({product}) => {
  const navigate = useNavigate();

  const goto=()=>{
    navigate("/product/"+product.id);
  }
  return <div className='Product px-2 pb-4' onClick={()=>goto()}>
      <div className='ProductWrapper position-relative'>
        <div className='overflow-hidden '>
          <img className='product-image' src={product?.imageUrl} alt="product" />
          {product?.discountPercentage ?  <span className='discountPercent'>-{product.discountPercentage}%</span> : ''}
        </div>
        <div>
          <h4 className='d-block'>{product.name}</h4>
          <span>
          <img className='rating mb-2' src={'https://cdn.shopify.com/s/files/1/0104/9395/2036/t/57/assets/stars.png?v=15610107112973649908'} alt="product" />
          </span>
          <div className='price'>
            {product?.discountPrice ? <span className='discPrice'>₹{product.discountPrice}</span> : ''}
            <span className={`${product?.discountPrice ? 'strikeOut' : ''}`}>₹{product?.price}</span>
          </div>
          {product.available ?<AddToCartButton />:<SoldOut /> }
        </div>
      </div>
  </div>;
};

export default ProductCard;
