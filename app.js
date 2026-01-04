import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/img/paitpooja_logo.png";
// import { Header } from "./header";
import logo from "./assets/img/paitpooja_logo.png";
import restaurantLogo from "./assets/img/restaurant_logo.png";

// High Level Planning
/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 * - RestaurantCard
 *  - Image
 *  - Restaurant Name, Cuisines, ETA, Star Rating
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const resData = {
  type: "restaurant",
  data: {
    id: "382636",
    name: "Wendy's Burgers",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/097020c5-09e8-4430-96fb-77ef985c2935_382636.JPG",
    locality: "Vasanth Nagar",
    areaName: "R.T. Nagar",
    costForTwo: "₹200 for two",
    cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
    avgRating: 4.3,
    parentId: "972",
    avgRatingString: "4.3",
    totalRatingsString: "3.4K+",
    sla: {
      deliveryTime: 31,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-01-04 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹59",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
};

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("resData: ", resData);
  return (
    <div className="card-restaurant">
      <img
        className="logo-restaurant"
        alt="Restaurant Logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.data.cloudinaryImageId}
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(', ')}</h4>
      <h4>{resData.data.avgRating} ⭐️</h4>
      <h4>{resData.data.costForTwo}</h4>
      <h4>{resData.data.sla.slaString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="container-restaurant">
        {/* Restaurant Cards */}
        <RestaurantCard
        //   resName="Pizza Street"
        //   cuisines="Italian, Greek"
        //   eta="38mins"
        //   stars="4.8 ⭐️"
        resData={resData}
        />
       
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <div className="container-logo">
        <img className="logo" src={logo} alt="Pait Pooja Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
