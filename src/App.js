import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import FoodTypeContainer from "./component/FoodTypeContainer";
import RestaurantCarousel from "./component/RestaurantCarousel";
import { Outlet } from "react-router-dom";
import UserContex from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/AppStore";

function App() {
  const [userName, setUserName] = useState("Vinay");

  return (
    <Provider store={appStore}>
      <div className="container-fluid">
        {/* <Login></Login> */}
        <UserContex.Provider value={{ loggedInUser: userName, setUserName }}>
          <Navbar className="mynavbar"></Navbar>
          <FoodTypeContainer></FoodTypeContainer>
          <RestaurantCarousel></RestaurantCarousel>
          {/* <Shimmer/> */}
          <Outlet></Outlet>
          {/* <RestaurantContainer></RestaurantContainer> */}
          {/* <RestaruntMenu/> */}
          {/* <UserClass/> */}
          <Footer />
        </UserContex.Provider>
      </div>
    </Provider>
  );
}
export default App;
