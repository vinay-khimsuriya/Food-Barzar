import react from 'react'
import {useState, useEffect} from 'react'
import Shimmer from './Shimmer';

export default function RestaruntMenuView(){
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    fetchMenu= async()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=762592&catalog_qa=undefined&submitAction=ENTER");
        const json=await data.json();
        console.log(json);

        setResInfo(json);
    }

    // if(resInfo===null){
    //     return <Shimmer></Shimmer>
    // }

    return(resInfo===null) ? 
    <Shimmer/> : (
        <div>
            <h3>{resInfo.data.cards[2].card.card.info.name} </h3>
            <p>description:</p>
            <p>{resInfo.data.cards[2].card.card.info.costForTwo}</p>
            <p>{resInfo.data.cards[2].card.card.info.city}</p>
        </div>
    );
}