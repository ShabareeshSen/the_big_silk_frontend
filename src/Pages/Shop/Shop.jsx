import React from 'react'
import ProductContainer from '../../CommonComponents/ProductContainer/ProductContainer';
import { products } from '../../Service/commondata';
import InfiniteCarousel from 'react-leaf-carousel';
import "./shop.scss";

const Shop = () => {

  const items=[
    {
      image:"https://kimcoder.s3.ap-northeast-2.amazonaws.com/demo/react-simple-image-slider/images/3.jpg",
      link:"/shop",
      title:"sample title 1"
    },
    {
      image:"https://www.teahub.io/photos/full/21-211351_blue-silk-wallpaper.jpg",
      link:"/shop",
      title:"sample title 2"
    },
    {
      image:"https://www.persil.com/images/jw6al4qorxz1/a9ed839c30ce30011cec612e18dc21f9/ee2c0bed30114be1c8cd48f37117a71c/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9nZW5lcmFsX2ltYWdlX2xhdW5kcnlfYWxsX2hvdy10by13YXNoLS5qcGc/1280w-800h/delicate-khaki-coloured-silk..jpg",
      link:"/shop",
      title:"sample title 3"
    },
    {
      image:"https://www.teahub.io/photos/full/21-211351_blue-silk-wallpaper.jpg",
      link:"/shop",
      title:"sample title 4"
    },
    {
      image:"https://www.persil.com/images/jw6al4qorxz1/a9ed839c30ce30011cec612e18dc21f9/ee2c0bed30114be1c8cd48f37117a71c/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9nZW5lcmFsX2ltYWdlX2xhdW5kcnlfYWxsX2hvdy10by13YXNoLS5qcGc/1280w-800h/delicate-khaki-coloured-silk..jpg",
      link:"/shop",
      title:"sample title 5"
    },
    {
      image:"https://www.teahub.io/photos/full/21-211351_blue-silk-wallpaper.jpg",
      link:"/shop",
      title:"sample title 6"
    },
    {
      image:"https://www.persil.com/images/jw6al4qorxz1/a9ed839c30ce30011cec612e18dc21f9/ee2c0bed30114be1c8cd48f37117a71c/aHR0cHNfX19hc3NldC1hbWVyaWNhcy51bmlsZXZlcnNvbHV0aW9ucy5jb21fY29udGVudF9kYW1fdW5pbGV2ZXJfZGlydF9pc19nb29kX2dsb2JhbF9nZW5lcmFsX2ltYWdlX2xhdW5kcnlfYWxsX2hvdy10by13YXNoLS5qcGc/1280w-800h/delicate-khaki-coloured-silk..jpg",
      link:"/shop",
      title:"sample title 7"
    }
  ]

  return (
    <div className={`shop`}>
        <div className='carousel'>
          <div className='w-100 d-flex p-4 font-weight-bold'>
            <div className='w-50 h1 text-center'> Our Silk Heroes </div>
            <div className='w-50 '>
              Our heroes are here to help boost your beauty game and get that low-maintenance glow, l
              eaving you ready to face the day with glossy locks and gorgeous skin. Ready to meet them?
            </div>
          </div>
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            dots={false}
            showSides={true}
            sidesOpacity={0.5}
            sideSize={0.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={true}
            >
              {
                items.map((item,ind)=><div to={item.link} key={ind}>
                <img className="sliderImages" src={item.image}  alt="sliderImage" />
                <h5 className='text-center text-uppercase p-1'>{item.title}</h5>
                </div>)
              }
      
          </InfiniteCarousel>
        </div>
        <div className='d-flex flex-wrap'>
          <ProductContainer title={'Silk Covers'} products={products} />
          <ProductContainer title={'Silk masks'} products={products} />
        </div>
    </div> 
  )
}

export default Shop