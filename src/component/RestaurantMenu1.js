import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../reusebleComponent/useRestaurentMenu";
import AccordianItemContainer1 from "./AccordianItemContainer1";
import Shimmer from "./Shimmer";

export default function RestaurantMenu1() {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  //   console.log(resInfo);
  let list =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  useEffect(() => {
    console.log(list);
  }, []);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-black mt-5">
      <div className="container-fluid d-flex justify-content-center opacity-75">
        <div className="w-75 border rounded-2 bg-light  p-3 ">
          {list && list.length > 0 ? (
            <div>
              {list.map((item, index) => (
                <AccordianItemContainer1
                  key={item.card.card.title}
                  item={item.card.card}
                  isOpen={index === showIndex ? true : false}
                  setShowIndex={() => {
                    setShowIndex(index);
                  }}
                />
              ))}
            </div>
          ) : (
            <div>Nothig to show</div>
          )}
        </div>
      </div>
    </div>
  );
}
