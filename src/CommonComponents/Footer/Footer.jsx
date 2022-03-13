import React from 'react'
import  "./footer.scss"
import {info, legal, store} from '../../Service/footercontent';
import ResponsiveAccordian from '../responsiveAccordian/ResponsiveAccordian';
import { FbLogo, InstaLogo, Pinterest } from '../../assets/logo';

const Footer = () => {
  return <div className='Footer'>
            <div className='footer_body'>
                <div className='Accordian'>
                      <ResponsiveAccordian content={store} />
                      <ResponsiveAccordian content={info} />
                      <ResponsiveAccordian content={legal} />
                </div>
                <div className='p-3'>
                  <p className='h5'>NEWSLETTER</p>
                  <input className='emailInput' type="text" placeholder='EMAIL ADDRESS' />
                  <button className='subscribeButton btn'  type='button'>Subscribe</button>
                  <div>
                    <p className='text-uppercase text-center'>follow us</p>
                     <div className='socialMedia d-flex justify-content-evenly'>
                        <a href={"http://www.fb.com"} target="_blank" rel="noreferrer noopener"><FbLogo /></a>
                        <a href={"http://www.instagram.com"} target="_blank" rel="noreferrer noopener"><InstaLogo /></a>
                        <a href={"http://www.Pinterest.com"} target="_blank" rel="noreferrer noopener"><Pinterest /></a>
                     </div>
                  </div>
                </div>
              </div>
          </div>
};

export default Footer;
