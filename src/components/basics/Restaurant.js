import React from "react";
import "./style.css";
// import menuApi which contains all food items
// this Menu will contain each food item
import Menu from "./menuApi.js";

import MenuCard from "./menuCard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All"
];

// console.log(uniqueList);
const Restaurant = () => {
  // useState returns an array of 2 elements
  // useState is a hook to manage data
  const [menuData, setMenuData] = React.useState(Menu);
  const [menuList, setMenuList] = React.useState(uniqueList);

  // function to filter out food items based on category
  const filterItem = (category) => {
    if (category === "All") {
      // passing complete Menu
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };
  return (
    <>
      {/* passing props filterItem to Navbar */}
      <Navbar filterItem={filterItem} menuList={menuList} />
      {/* passing data from one componet to another*/}
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
