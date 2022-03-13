import React, { useState } from 'react'
import { useEffect } from 'react';
import "./productImage.scss";

const ProductViewImage = ({id, image}) => {
    const [focusedImage, setFocusedImage] = useState("");
    const changeFocus = (e) =>{
        setFocusedImage(e.target.src);
    }
    useEffect(() => {
        console.log("sadsad",image)
        setFocusedImage(image?.mainImage);
    }, [image])
    
    
  return (
    <div className='productImageView'>
        <div className='imageBox w-100 h-100 d-flex'>
            <div className='left'>
                {
                    image?.subImages?.map((url,ind)=> <img className='subImage' onClick={(e)=>changeFocus(e)} src={url} alt={"subimage"+ind} key={ind} />)
                }
            </div>
            <div className='right'>
               <img src={focusedImage} alt="Product" />
            </div>
        </div>
    </div>
  )
}

export default ProductViewImage