import { IconButton } from '@mui/material';
import React, { useState } from 'react'
import { ModalBody } from 'react-bootstrap';
import './cart.scss'

const Cart = ({ setShowCart }) => {
    const [count, setCount] = useState(1);
    const hideCart=()=>{
        setShowCart(false);
        setCount(1);
    }
  return (
    <div className='cart' onClick={()=>{
        hideCart()
    }}>
        <div className='main' onClick={e => { 
          e.stopPropagation();
        }} >
            <div className='titleBlock'>
                <span>Your cart ({count}) </span> 
                <span className='closeButton' onClick={()=>hideCart()}>x</span>
            </div>
            {
              (count === 0) ? <p>your cart is empty</p>:
              <>
                <CartItem data="1" />
                <CartItem data="1" />
                <CartItem data="1" />
              </>
            }
        </div> 
    </div>
  )
}

const CartItem=({data})=>{
  const url="https://cdn.shopify.com/s/files/1/0104/9395/2036/products/210827_TheBigSilk_1823_v1_small_3d0a56ae-5b3b-43cd-aa56-6986d685f81b_300x_crop_bottom.jpg?v=1634418835"
  return(
    <div className='cartItem positionRelative p-2'>
      <div className='d-flex'>
        <img className='p-1' src={url} alt="productIcon" width="75px" height="75px" />
        <div>
          <p className='h6'>Name</p>
          <p className='h6'>color</p>
        </div>
      </div>
      <div>
        <butto className='removeItem btn'>x</butto>
        <span className="itemPrice mx-2">price</span>
      </div>
    </div>
  );
}

export default Cart