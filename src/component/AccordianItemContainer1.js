import React, { useState } from "react";
import ItemCategoryCard1 from "../reusebleComponent/ItemCategoryCard1";

export default function AccordianItemContainer1({
  item,
  isOpen,
  setShowIndex,
}) {
  //   const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setShowIndex();
    //   alert("clicked");
  };

  //   console.log(item.itemCards);
  return (
    <div className="text-white my-2 bg-dark">
      <div
        className="heading d-flex justify-content-between"
        onClick={handleClick}
      >
        <h4>{item.title}</h4>

        <i className="fa-solid fa-angle-up bg-transparent" style={{}}></i>
        <i
          className="fa-solid fa-angle-down d-none bg-transparent"
          style={{}}
        ></i>
      </div>
      {/* <div className="itemCards" style={{ display: isOpen ? "flex" : "none" }}>
      <ItemCategoryCard1 subCards={item.itemCards} />
      </div> */}
      {isOpen && <ItemCategoryCard1 subCards={item.itemCards} />}
    </div>
  );
}
