import React, { useContext, useEffect, useState } from "react";
import resDataList from "../utils/ResDataList";
import RestarantCard, {
  withPromtedLabel,
} from "../reusebleComponent/RestarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContex from "../utils/UserContext";

function RestaurantContainer() {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const myData = resDataList;
  const [searchT, setSearchT] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  const [onlineStatuse, setOnlineStates] = useState(true);
  const RestaurentCardWithLabel = withPromtedLabel(RestarantCard);

  const { loggedInUser, setUserName } = useContext(UserContex);

  useEffect(() => {
    fetchData();
    window.addEventListener("online", () => {
      setOnlineStates(true);
    });
    window.addEventListener("offline", () => {
      setOnlineStates(false);
    });

    // return () => {
    //   window.removeEventListener("online");
    //   window.removeEventListener("offline");
    // };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      setResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredResList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      console.log(filteredResList);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  if (onlineStatuse === false) {
    return <div>You are offline</div>;
  } else if (loading) {
    return <Shimmer />;
  }
  return (
    <div className="res-container container d-flex flex-column">
      <div className="d-flex ps-1 ">
        <input
          className="me-1 rounded-pill"
          type="text"
          value={searchT}
          onChange={(e) => {
            setSearchT(e.target.value);
          }}
        ></input>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            const fdata = resList.filter((res) =>
              res.info.name.toLowerCase().includes(searchT.toLocaleLowerCase())
            );

            if (fdata.length === 0) {
              alert("No matching restaurants found.");
            } else {
              setFilteredResList(fdata);
            }
          }}
        >
          Search
        </button>
      </div>

      <div>
        <input
          className="rounded-pill"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>

      <div className="d-flex flex-wrap justify-content-between">
        {filteredResList && filteredResList.length > 0 ? (
          filteredResList.map((restaurant, index) => (
            <Link
              className="card-link"
              to={"restaurants/" + restaurant.info.id}
            >
              {restaurant.info.id % 2 === 0 ? (
                <RestarantCard
                  key={restaurant.info.id}
                  resDataList={restaurant}
                />
              ) : (
                <RestaurentCardWithLabel resDataList={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <div>No data found</div>
        )}

        {/* {resDataList.map(res=> <RestarantCard resListObject={res} />)} */}
        {/* <RestarantCard resDataList={myData[0]}></RestarantCard> */}
      </div>
    </div>
  );
}
export default RestaurantContainer;
