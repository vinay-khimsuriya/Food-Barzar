import React from 'react'
import ShimmerCard from '../reusebleComponent/ShimmerCard'

export default function Shimmer() {
  return (
    <div className='res-container container d-flex flex-column'>
        <div className="d-flex ps-1 ">
            <input className="me-1 rounded-pill" type="text" value={""} ></input>
            <button className="btn btn-primary" type="button" >Search</button>
           </div>
        <div className='d-flex flex-wrap justify-content-between'>
            <ShimmerCard/>
            <ShimmerCard/>
            <ShimmerCard/>
            
        </div>
    </div>
  )
}
