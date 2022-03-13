import React from 'react'
import "./discount.scss";
const NewUserDisCount = ({setShowDiscountCard}) => {
  const close =()=>{
    setShowDiscountCard(false);
  }
  return (
    <div className='NewUserDisCount'>
        <div className='h2'>
            <button className='close'  onClick={()=>close()}>
              x 
            </button>
        </div>
        <div className='position-relative'>
            <div className='getEmail'>
                <input type="text" placeholder='EMAIL' />
                <button className='btn btn-dark text-uppercase' >Send me the discount</button>
            </div>
        </div>
    </div>
  )
}

export default NewUserDisCount