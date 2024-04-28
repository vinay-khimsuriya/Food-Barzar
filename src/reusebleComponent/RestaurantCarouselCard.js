import React from 'react'

export default function RestaurantCarouselCard(props) {
  return (
    <div>
      <div className='food-carousel container'>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +props.foodItem.imageId} alt='image' className='rounded-pill '></img>
        <h6 className='text-center mt-1 mb-0'>{props.foodItem.action.text} </h6>
      </div>
    </div>
  )
}
