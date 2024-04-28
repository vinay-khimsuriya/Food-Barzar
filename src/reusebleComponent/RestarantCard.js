import React from 'react'

export default function RestarantCard({resDataList}) {
  return (
    <div className='card-container container'>
    
            <div className='card-image d-flex' style={{backgroundImage:`url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resDataList.info.cloudinaryImageId})`, backgroundSize:"cover", backgroundPosition:"center"}}>
                <h3 className='ps-2 align-self-end'></h3>
            </div>
            <div className='res-card-content'>{resDataList.info.name} </div>
            <div className='res-card-content row text-justify'>
                <div className='col-6'>{resDataList.info.avgRating} </div>
                <div className='col-6'>{resDataList.info.sla.deliveryTime + " minutes"} </div>
            </div>
            <div className='res-card-content text-justify'>{resDataList.info.cuisines.join(', ')} </div>
            <div className='res-card-content'>{resDataList.info.locality}{", "} {resDataList.info.areaName} </div>

            {/* <div className='card-image d-flex' style={{backgroundImage:`url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resDataList.info.cloudinaryImageId})`, backgroundSize:"cover", backgroundPosition:"center"}}>
                <h3 className='ps-2 align-self-end'>{resDataList.info.aggregatedDiscountInfoV3.header} </h3>
            </div>
            <div className='res-card-content'>{resDataList.info.name} </div>
            <div className='res-card-content row text-justify'>
                <div className='col-6'>{resDataList.info.avgRating} </div>
                <div className='col-6'>{resDataList.info.sla.deliveryTime + " minutes"} </div>
            </div>
            <div className='res-card-content text-justify'>{resDataList.info.cuisines.join(', ')} </div>
            <div className='res-card-content'>{resDataList.info.locality}{", "} {resDataList.info.areaName} </div> */}
        </div>
  )
}
