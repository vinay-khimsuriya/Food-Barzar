import React from 'react'
import FoodTypeCard from '../reusebleComponent/FoodTypeCard'
import { useState, useRef } from 'react';
import FoodTypeData from '../utils/FoodTypeData'

export default function FoodTypeContainer() {
    const [foodCardData, setFoodCardData]=useState(FoodTypeData);
    let foodC=document.querySelector('.food-container');
    
    const btnPrevious=() =>{
        let width=200; 
        foodC.scrollLeft= foodC.scrollLeft - width;
        console.log(width);    
    }
    
    const btnNext=() =>{
        let width=200; 
        // let width=foodC.clientWidth; 
        foodC.scrollLeft= foodC.scrollLeft + width;
      
    }
  
  return ( 
    <div className='container my-2'>
        <div className='row align-items-center'>
            <div className='col-1 d-flex justify-content-center'><i className="fa-solid fa-angles-left" onClick={btnPrevious}></i></div>
            <div className='food-container col-10 container-fluid d-flex overflow-hidden'> 
                {foodCardData.map(res=><FoodTypeCard key={res.id} foodItem={res} />)}
            </div>
            <div className='col-1 d-flex justify-content-center'><i className="fa-solid fa-angles-right" onClick={btnNext}></i></div>
        </div>
    </div>

  )
}
