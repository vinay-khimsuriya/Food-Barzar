import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RestaurantCarouselCard from '../reusebleComponent/RestaurantCarouselCard';
import foodCardData from '../utils/FoodTypeData';

export default function RestaurantCarousel() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
    <div className='container my-5'>
      <Carousel className='mx-5' responsive={responsive}>
      {foodCardData.map(res=><RestaurantCarouselCard key={res.id} foodItem={res} />)}
        
        {/* <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
    </Carousel>
    </div>
  )
}
