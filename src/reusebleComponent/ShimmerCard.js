import React from 'react'

export default function ShimmerCard() {
  return (
    <div className='shimmer-container container'>
    
            <div className='card-image d-flex bg-secondary' >
                <h3 className='ps-2 align-self-end'></h3>
            </div>
            <div className='shimmer-card-content'></div>
            <div className='shimmer-card-content row ms-1'>
                <div className='col-6'></div>
                <div className='col-6'></div>
            </div>
            <div className='shimmer-card-content text-justify'></div>
            <div className='shimmer-card-content'></div>
        </div>
  )
}
