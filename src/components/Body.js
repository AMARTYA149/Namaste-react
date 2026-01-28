import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  // Local State variable
  const [listOfRestaurant, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async() =>{
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    let responseData = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurants(responseData);
    setFilteredListOfRestaurant(responseData);

  }

  // Conditional Rendering
  return listOfRestaurant.length === 0 ? <Shimmer/> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            const filteredRestaurant = listOfRestaurant.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLowerCase())});
              setFilteredListOfRestaurant(filteredRestaurant)
          }}>Search</button>
        </div>
        <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(res => res.info.avgRating >= 4.3);
            setFilteredListOfRestaurant(filteredList)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="container-restaurant">
        {filteredListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
