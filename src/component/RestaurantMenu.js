import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../reusebleComponent/useRestaurentMenu";
import AccordianItemContainer from "./AccordianItemContainer";
import Navbar from "./Navbar";
import { Provider } from "react-redux";

export default function RestaruntMenu() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);
  // console.log(resId);

  // useEffect(() =>{

  //     fetchMenu();
  // },[])

  // const fetchMenu = async () =>{
  //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER");
  //     const jsonData = await data.json();

  //     console.log(jsonData);

  //     setResInfo(jsonData);

  // };

  //   console.log(resInfo);

  // useEffect(() => {
  //   console.log(openIndexes);
  // }, [openIndexes]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  console.log(resInfo);

  const toggleAccordionOneOnly = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [index]
    );
  };

  let list =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // useEffect(() => {
  //   console.log(list);
  // }, []);

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-black">
      <div className="container border rounded-2 text-dark bg-white opacity-75 my-2">
        <div>
          <h1>{resInfo.data.cards[2].card.card.info.name}</h1>
          <div className="container-fluid">
            <div className="d-flex">
              <span
                className="mx-1 rounded-circle bg-success d-flex align-items-center justify-content-center text-white"
                style={{ width: "25px", height: "25px", fontSize: "20px" }}
              >
                &#9734;
              </span>
              <p className="mx-1">
                {resInfo.data.cards[2].card.card.info.avgRatingString}
              </p>
              <p className="mx-1 d-flex align-items-center justify-content-center">
                .
              </p>
              <p className="mx-1">
                {resInfo.data.cards[2].card.card.info.costForTwoMessage}
              </p>
            </div>
            <div className="row">
              <h6 className="mx-1">
                {resInfo.data.cards[2].card.card.info.labels[1].message}
              </h6>
            </div>
            <div className="row d-flex">
              <div></div>
              <div>
                <div className="d-flex">
                  <h6 className="mx-1">outlet</h6>
                  <p className="mx-1">
                    {resInfo.data.cards[2].card.card.info.areaName}
                  </p>
                </div>
                <div className="row">
                  <h6>{resInfo.data.cards[2].card.card.info.sla.slaString}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center opacity-75">
        <div className="w-75 border rounded-2 bg-light  p-3 ">
          {list && list.length > 0 ? (
            <div>
              {list.map((item, index) => (
                <AccordianItemContainer
                  key={index}
                  item={item}
                  index={index}
                  openIndexes={openIndexes}
                  toggleAccordionOneOnly={toggleAccordionOneOnly}
                />
                // <div>
                //   <div key={index} className="text-white px-2 my-2">
                //     <div
                //       className="d-flex rounded-top justify-content-between bg-dark"
                //       onClick={() => toggleAccordionOneOnly(index)}
                //     >
                //       <div className="py-2 ps-2 h5 ">
                //         {item.card.card.title}
                //       </div>
                //       <i
                //         className="fa-solid fa-angle-down bg-transparent text-white"
                //         style={{
                //           display: openIndexes.includes(index)
                //             ? "flex"
                //             : "none",
                //         }}
                //       ></i>
                //       <i
                //         className="fa-solid fa-angle-up bg-transparent text-white "
                //         style={{
                //           display: openIndexes.includes(index)
                //             ? "none"
                //             : "flex",
                //         }}
                //       ></i>
                //     </div>
                //     <div
                //       className="bg-dark m-0  rounded-bottom"
                //       style={{
                //         display: openIndexes.includes(index) ? "flex" : "none",
                //         //   transition: "display 2s ",
                //       }}
                //     >
                //       <div className="w-100">
                //         {item.card.card.itemCards.map((categoryItem) => (
                //           <>
                //             <ItemCategoryCard
                //               className=""
                //               categoryItem={categoryItem}
                //             />
                //           </>
                //         ))}
                //       </div>
                //     </div>
                //   </div>
                // </div>
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
