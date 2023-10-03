// import { Link } from "react-router-dom";
// import { AiFillHome } from "react-icons/ai";
// import { BsFillInfoSquareFill } from "react-icons/bs";
// import { IoMdHelpBuoy } from "react-icons/io";
//  import {fetchCoords} from '../utils/coordsSlice';
//  import { setLatitude,setLongitude } from "../utils/coordsSlice";
// import { BsFillCartFill } from "react-icons/bs";
// import { useDispatch, useSelector } from "react-redux";
// import SearchCity from "./SearchCity";
// import { useEffect, useState } from "react";
// import Logo from "../assest/img/foood-removebg-preview.png"

// const Title = () => (
//   <div className="flex items-center">
//     <Link to="/">
      
//     <img
//       className="h-20"
//       alt="logo"
//       src={Logo}
//     />
//     </Link>

//   </div>
// );

// const Header = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const dispatch =useDispatch();
//   const {latitude,longitude,searchedCity} = useSelector(
//     (store) => store.coords
//   );
//   const [city,setCity] =useState("");
  
//   const searchRestaurants = ()=>{
//     dispatch(fetchCoords(city));
//     setCity("")
//   }

//   //fetching the current coordiantes
//   const getCurrCoords = ()=>{
//     if("geolocation" in navigator && latitude==null && longitude==null){
//       navigator.geolocation.getCurrentPosition(
//         (position)=>{
//         dispatch(setLatitude(position.coords.latitude));
//         dispatch(setLongitude(position.coords.longitude));
//       },(error)=>{
//         console.log("Error",error)
//       })
//     }else{
//       console.error("Geolocation is not supported by this browser.");
//     }
//   }

//   useEffect(()=>{
//     getCurrCoords();
//   },[])

//   return (
//     <div className="flex items-center justify-between border py-2">
//       <div className="flex items-center">
//         <Title />
//         <SearchCity searchRestaurants={searchRestaurants}
//         setCity={setCity} 
//         city={city}/>
        
//       </div>
//       <div className="mx-6">
//         <ul className="flex">
//         <Link to="/Home">
//             <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
//               <AiFillHome
//                 style={{ fontSize: "1.5rem", marginRight: "8px" }}
//               />
//               Home
//             </li>
//           </Link>
         
//           <Link to="/about">
//             <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
//               <BsFillInfoSquareFill
//                 style={{ fontSize: "1rem", marginRight: "8px" }}
//               />
//               About
//             </li>
//           </Link>
//           <Link to="/support">
//             <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
//               <IoMdHelpBuoy
//                 style={{ fontSize: "1.5rem", marginRight: "8px" }}
//               />
//               Help
//             </li>
//           </Link>

//           <Link to="/cart">
//             <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
//               <BsFillCartFill
//                 style={{ fontSize: "1.5rem", marginRight: "8px" }}
//               />
//               Cart
//               <div className="ml-2.5 mb-1  text-xs text-white absolute font-semibold  ">
//                 {cartItems.length === 0 ? "" : cartItems.length}
//               </div>
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Header;

















import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { IoMdHelpBuoy } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import SearchCity from "./SearchCity";
import Logo from "../assest/foood-removebg-preview.png"

import { fetchCoords } from "../utils/coordsSlice";
import { setLatitude, setLongitude } from "../utils/coordsSlice";

const Title = () => (
  <div className="flex items-center">
    <Link to="/">
      <img className="h-20" alt="logo" src={Logo} />
    </Link>
  </div>
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const { latitude, longitude, searchedCity } = useSelector(
    (store) => store.coords
  );
  const [city, setCity] = useState("");

  const searchRestaurants = () => {
    dispatch(fetchCoords(city));
    setCity("");
  };

  // Fetching the current coordinates
  const getCurrCoords = () => {
    if ("geolocation" in navigator && latitude == null && longitude == null) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          dispatch(setLatitude(position.coords.latitude));
          dispatch(setLongitude(position.coords.longitude));
        },
        (error) => {
          console.log("Error", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getCurrCoords();
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border py-2 sm:flex-col sm:items-center sm:justify-between sm:py-4 md:py-2 lg:py-2">
      <div className=" flex items-center justify-between w-full md:w-auto sm:w-full sm:flex-col sm:items-center sm:mt-4">
        <Title />
        <SearchCity
          searchRestaurants={searchRestaurants}
          setCity={setCity}
          city={city}
        />
      </div>
      <div className="mx-6">
        <ul className="flex flex-col md:flex-row sm:flex-col sm:items-center sm:justify-center">
          <Link to="/Home">
            <li className="px-6 md:px-4 sm:px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 sm:mt-2">
              <AiFillHome
                style={{ fontSize: "1.5rem", marginRight: "8px" }}
              />
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="px-6 md:px-4 sm:px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 sm:mt-2">
              <BsFillInfoSquareFill
                style={{ fontSize: "1rem", marginRight: "8px" }}
              />
              About
            </li>
          </Link>
          <Link to="/support">
            <li className="px-6 md:px-4 sm:px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 sm:mt-2">
              <IoMdHelpBuoy
                style={{ fontSize: "1.5rem", marginRight: "8px" }}
              />
              Help
            </li>
          </Link>

          <Link to="/cart">
            <li className="px-6 md:px-4 sm:px-6 text-medium font-semibold relative flex items-center text-gray-600 hover:text-orange-600 sm:mt-2">
              <BsFillCartFill
                style={{ fontSize: "1.5rem", marginRight: "8px" }}
              />
              Cart
              <div className="ml-2.5 mb-1 text-xs text-white absolute font-semibold">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
