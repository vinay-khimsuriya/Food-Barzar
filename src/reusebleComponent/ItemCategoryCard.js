import React from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

export default function ItemCategoryCard(props) {
  const categoryItem = props.categoryItem;

  const dispatch = useDispatch();

  const handleAddItem = () => {
    //Dispatch an action here
    dispatch(addItem("burger"));
  };

  //   console.log(categoryItem);
  return (
    <div className="conteiner-fluid ps-2 bg-light text-dark fw-bolder m-2 rounded-2">
      <div className="row w-100">
        <div className="col-12 col-sm-7 col-md-8 col-lg-9 col-xl-10">
          <h3 className="my-2">{categoryItem.card.info.name}</h3>
          <h6 className="my-2">{categoryItem.card.info.category}</h6>
          <p>
            {categoryItem.card.info.ratings.aggregatedRating.rating} given by{" "}
            {categoryItem.card.info.ratings.aggregatedRating.ratingCount}
          </p>
        </div>
        <div className="col-12 position-relative bg-dark my-1 col-sm-5 col-md-4 col-lg-3 mx-sm-0 mx-2 rounded-1 col-xl-2 d-flex justify-content-center align-items-center">
          <img
            className="w-100 rounded-2 "
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${categoryItem.card.info.imageId}`}
          ></img>
          <button
            className="btn btn-primary position-absolute bottom-0 mb-2"
            onClick={handleAddItem}
          >
            add Item
          </button>
        </div>
      </div>
    </div>
  );
}
