import React from 'react'
import Navbar from './component/Navbar'
import RestaurantContainer from './component/RestaurantContainer'
import Footer from './component/Footer'
import FoodTypeContainer from './component/FoodTypeContainer'
import RestaurantCarousel from './component/RestaurantCarousel'
import Shimmer from './component/Shimmer'

function App(){
    return(
        <div className='container-fluid'>
            {/* <Login></Login> */}

            <Navbar className="mynavbar"></Navbar>
            <FoodTypeContainer></FoodTypeContainer>
            <RestaurantCarousel></RestaurantCarousel>
            {/* <Shimmer/> */}
            <RestaurantContainer></RestaurantContainer>
            <Footer/>
        </div>
    )
}
export default App