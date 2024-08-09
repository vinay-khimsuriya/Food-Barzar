import { useEffect, useState } from "react";

function useRestaurentMenu(resId) {
  const [resInfo, setResInfo] = useState(null);
  // const {resId} = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.02760&lng=72.58710&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await data.json();

    setResInfo(jsonData);
  };

  return resInfo;
}

export default useRestaurentMenu;
