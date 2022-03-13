import React from 'react';
import './Buttons.scss';

const AddToCartButton = () => {
  return <div>
      <button className={`button AddToCartButton`}>Add to cart</button>
  </div>;
};

const SoldOut = () => {
  return <div>
      <button className={`button SoldOut text-uppercase`} disabled>Sold out</button>
  </div>;
};

const ShopNow = () => {
  return <div>
      <button className={`button btn-bottom-outline text-uppercase`} >Shop now</button>
  </div>;
};



export {ShopNow,AddToCartButton,SoldOut};
