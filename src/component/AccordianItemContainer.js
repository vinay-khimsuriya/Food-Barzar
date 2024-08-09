import React, { useState } from "react";
import ItemCategoryCard from "../reusebleComponent/ItemCategoryCard";

export default function AccordianItemContainer({
  item,
  index,
  openIndexes,
  toggleAccordionOneOnly,
}) {
  //
  return (
    <div key={index} className="text-white px-2 my-2">
      <div
        className="d-flex rounded-top justify-content-between bg-dark"
        onClick={() =>
          // handleClick
          toggleAccordionOneOnly(index)
        }
        style={{ cursor: "pointer" }}
      >
        <div className="py-2 ps-2 h5 ">{item.card.card.title}</div>
        <i
          className="fa-solid fa-angle-down bg-transparent text-white"
          style={{
            display: openIndexes.includes(index) ? "flex" : "none",
          }}
        ></i>
        <i
          className="fa-solid fa-angle-up bg-transparent text-white "
          style={{
            display: openIndexes.includes(index) ? "none" : "flex",
          }}
        ></i>
      </div>
      <div
        className="bg-dark m-0  rounded-bottom"
        style={{
          display: openIndexes.includes(index) ? "flex" : "none",
        }}
      >
        <div className="w-100">
          {item.card.card.itemCards.map((categoryItem) => (
            <ItemCategoryCard
              key={categoryItem.id}
              categoryItem={categoryItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
