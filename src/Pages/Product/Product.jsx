import { Accordion, AccordionDetails, AccordionSummary, Rating, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductContainer from '../../CommonComponents/ProductContainer/ProductContainer';
import { productImages, topPicks } from '../../Service/commondata';
import "./product.scss";
import ProductViewImage from '../../CommonComponents/ProductViewImage/ProductViewImage';
const Product = () => {
    const params = useParams();
    const id = params.id;
    const [expanded, setExpanded] = useState(false);
    const [image, setImage] = useState("");
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    useEffect(() => {
           setImage(productImages.find((product)=>{
                    return Number(product?.productId) === Number(id);
                })
            );
    }, [id]);
  
  return (
    <div className='ViewProduct'>
      <div className='heightAuto d-flex justify-content-center flex-wrap w-100 h-auto'>
        <div className='w-50 d-flex justify-content-end'>
          <ProductViewImage id={id} image={image} />
        </div>
        <div className='w-50'>
          <p className='h2'>Luxe Scrunchie</p>
          <span className='h6'> <Rating name="read-only" value={4.5} size="small" precision={0.5} readOnly /> 81 Reviews</span>
          <p className='h3'>₹15.00</p>
          <div className='w-75 text-justify'>
              <p className='h6'><strong>EDITOR’S NOTES:</strong></p>
              <p className='h6'>
                Designed with full pleats for a statement finish to your messy bun or sleek ponytail, 
                The Big Silk’s luxe mulberry silk scrunchie is the elevated addition to that “out out” 
                outfit (or jeans and a nice top combo) that you never knew you needed. These luxe silky 
                scrunchies are also super soft on your locks with amazing staying power — so you can rock 
                a messy bun with confidence to brunch and beyond.
              </p>
              <p className='h6'>
                Did you know that our luxe silk scrunchies are hair extension friendly? Unlike other hair ties, 
                our mulberry silk scrunchies simply glide through your hair and won’t pull on your bonds. You’ll 
                love how they’re silky soft and fight frizz, but have amazing hold. Psst - these silk hair ties won’t 
                leave creases or kinks in your locks either!
              </p>
              <p className='h6'><strong>GOOD TO KNOW:</strong></p>
                <ul className='list-hiphen'>
                  <li>No kinks</li>
                  <li>Perfect hold</li>
                  <li>Extension friendly</li>
                  <li>Anti-damage</li>
                </ul>
              <p className='h6'><strong>Pick your colour:</strong></p>
              <div className='d-flex flex-wrap'>
                {
                  image?.colorImages?.map((color)=>{
                    return <div className=' mx-2 my-1  text-center text-uppercase'>
                      <img className='picColorImage' src={color.image} alt="colorImage" title={color.color} />
                      <p>{color.color}</p>
                    </div>
                  })
                }
              </div> 
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Delivery</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography  sx={{ borderTop: 1}}>
                     Some delivery message
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Care Instructions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ borderTop: 1}}>
                     <ul className='list-hiphen'>
                       <li>Handwash at max 30℃</li>
                       <li>Always use a PH neutral or silk safe washing detergent</li>
                       <li>Line dry only</li>
                     </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
          </div>
        </div>
        <ProductContainer title={'YOU MAY ALSO LIKE'} titleCenter={true} products={topPicks} />
      </div>
    </div>
  )
}

export default Product