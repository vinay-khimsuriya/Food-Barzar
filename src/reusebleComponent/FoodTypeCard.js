import React from 'react'

export default function FoodTypeCard(props) {
    // console.log(props);
  return (
    <div className='food-card container-fluid border'>
      <div className='d-flex justify-content-center border' style={{width:'200px'}}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +props.foodItem.imageId } alt='image' className='mt-1 mx-auto rounded-pill'></img>
      </div>
      <h6 className='text-center mt-1 mb-0'>{props.foodItem.action.text} </h6>
    </div>
  )
}
