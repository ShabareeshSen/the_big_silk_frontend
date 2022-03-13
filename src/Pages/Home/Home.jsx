import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";
import "./home.scss";
import { useNavigate } from 'react-router-dom';
import { topPicks } from '../../Service/commondata';
import ProductContainer from '../../CommonComponents/ProductContainer/ProductContainer';

const Home = () => {
  const navigate = useNavigate();
  const items=[
    {
      image:"https://cdn.shopify.com/s/files/1/0104/9395/2036/files/Desktop_Header_NEW_2_1900x800.png?v=1633969682",
      link:"/shop"
    },
    {
      image:"https://www.teahub.io/photos/full/21-211351_blue-silk-wallpaper.jpg",
      link:"/shop"
    },
    {
      image:"https://www.persil.com/images/jw6al4qorxz1/a9ed839c30ce30011cec612e18dc21f9/ee2c0bed30114be1c8cd48f37117a71c/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9nZW5lcmFsX2ltYWdlX2xhdW5kcnlfYWxsX2hvdy10by13YXNoLS5qcGc/1280w-800h/delicate-khaki-coloured-silk..jpg",
      link:"/shop"
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0104/9395/2036/files/Desktop_Header_NEW_2_1900x800.png?v=1633969682",
      link:"/shop"
    },
    {
      image:"https://www.persil.com/images/jw6al4qorxz1/a9ed839c30ce30011cec612e18dc21f9/ee2c0bed30114be1c8cd48f37117a71c/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9nZW5lcmFsX2ltYWdlX2xhdW5kcnlfYWxsX2hvdy10by13YXNoLS5qcGc/1280w-800h/delicate-khaki-coloured-silk..jpg",
      link:"/shop"
    }
  ]

  const slideClick=(ind)=>{
    console.log(ind);
    navigate(items[ind].link);

  }

  return (
    <div  className='homePage'>
      <div>
        <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} onClickItem={(e)=>slideClick(e)} >
               {
                 items.map((item,ind)=><div to={item.link} key={ind}>
                  <img className="sliderImages" src={item.image} alt="banner" />
                  </div>)
               }
            </Carousel>
        </div>
        <div>
          <ProductContainer title={'Silk Covers'} titleCenter={true} products={topPicks} />
        </div>
    </div>
  )
}

export default Home