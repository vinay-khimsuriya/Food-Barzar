import React, { useEffect, useState } from "react";
import resDataList from '../utils/ResDataList'
import RestarantCard from "../reusebleComponent/RestarantCard";
import data from "../utils/ResDataList";
import Shimmer from "./Shimmer";

function RestaurantContainer(){
    const [resList,setResList]=useState([]);
    const [filteredResList,setFilteredResList]=useState([]);
    const myData=resDataList;
    const [searchT,setSearchT]=useState("");
    const [loading, setLoading] = useState(true); // New loading state

    // console.log(resdataList);

    useEffect(()=>{
    fetchData();
    },[]);

    useEffect(() => {
        // console.log(resList);
    }, [resList]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            // Now you can use the 'data' variable for further processing
            setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            console.log(filteredResList);
            setLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    if(loading){
        return <Shimmer/>;
    }
    return(
        <div className="res-container container d-flex flex-column">        
           <div className="d-flex ps-1 ">
            <input className="me-1 rounded-pill" type="text" value={searchT} onChange={(e)=>{
                setSearchT(e.target.value);
            }}></input>
            <button className="btn btn-primary" type="button" onClick={()=>
            {
                const fdata=resList.filter((res)=>res.info.name.toLowerCase().includes(searchT.toLocaleLowerCase()));

                if (fdata.length === 0) {
                    alert('No matching restaurants found.');
                } else {
                    setFilteredResList(fdata);
                }

            }}>Search</button>
           </div>

        <div className="d-flex flex-wrap justify-content-between">
            {filteredResList.map((restaurant)=> <RestarantCard key={restaurant.info.id} resDataList={restaurant}/> )}

            {/* {resDataList.map(res=> <RestarantCard resListObject={res} />)} */}
            {/* <RestarantCard resDataList={myData[0]}></RestarantCard> */}
        </div>
    </div>
    );
}
export default RestaurantContainer