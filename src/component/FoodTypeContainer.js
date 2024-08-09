import React from 'react'
import FoodTypeCard from '../reusebleComponent/FoodTypeCard'
import { useState, useRef, useEffect } from 'react';
import FoodTypeData from '../utils/FoodTypeData'

export default function FoodTypeContainer() {
    const [foodCardData, setFoodCardData]=useState(FoodTypeData || []);
    const foodContainerRef = useRef(null);
    
    const btnPrevious=() =>{
        let width=200; 
        if (foodContainerRef.current) {
            foodContainerRef.current.scrollLeft = foodContainerRef.current.scrollLeft - width;
        }
        console.log(`Scrolled left by ${width}px`);
            console.log(`Current scroll position: ${foodContainerRef.current.scrollLeft}`);
           
    }
    
    const btnNext=() =>{
        let width=200; 
        if (foodContainerRef.current) {
            foodContainerRef.current.scrollLeft = foodContainerRef.current.scrollLeft + width;
            console.log(`Scrolled right by ${width}px`);
            console.log(`Current scroll position: ${foodContainerRef.current.scrollLeft}`);
        
        }
    }

    useEffect(() => {
        if (!foodContainerRef.current) {
            console.error('Food container reference is not set');
        }
    }, []);
  
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
