import React from "react";

const RestarantCard = ({ resDataList }) => {
  return (
    <div className="card-container container">
      <div
        className="card-image d-flex"
        style={{
          backgroundImage: `url(https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resDataList.info.cloudinaryImageId})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h3 className="ps-2 align-self-end"></h3>
      </div>
      <div className="res-card-content">{resDataList.info.name} </div>
      <div className="res-card-content row text-justify">
        <div className="col-6">{resDataList.info.avgRating} </div>
        <div className="col-6">
          {resDataList.info.sla.deliveryTime + " minutes"}{" "}
        </div>
      </div>
      <div className="res-card-content text-justify">
        {resDataList.info.cuisines.join(", ")}{" "}
      </div>
      <div className="res-card-content">
        {resDataList.info.locality}
        {", "} {resDataList.info.areaName}{" "}
      </div>

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
  );
};

//Higher Order Cpomponent

//input - RestaurentCard ==> RestaurentCardPromoted

export const withPromtedLabel = (RestarantCard) => {
  return (props) => {
    return (
      <div className="position-relative">
        <label className="position-absolute top-0 left-0 ms-1 p-1 bg-light  rounded-2 text-dark">
          Promoted
        </label>
        <RestarantCard {...props} />
      </div>
    );
  };
};

export default RestarantCard;
