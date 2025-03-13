/*
import React from "react";
import'./FoodItem_card.css';
import { assets } from "../../assets/assets";

const FoodItem_card = ({id, name, description, price, image}) => {
  // Implement Food Item Card Component here

  return (
    <div className="foodItem_card">
      <div className="foodItem_img_container">
        <img className="foodItem_img" src={image} alt={name} />
      </div>
      <div className="foodItem_info">
        <div className="fooItem_name_rating">
            <h3>{name}</h3>
            <img src={assets.rating_starts} alt=""/>
        </div>
        <p className="foodItem_desc"> {description}</p>
        <p className="foodItem_price"> Rs.{price}</p>
        
      </div>    
    </div>
  );
};

export default FoodItem_card;
*/

/*


import React, { useState } from "react";
import'./FoodItem_card.css';
import { assets } from "../../assets/assets";
const FoodItem_card = ({id, name, description, price, image}) => {
  // Implement Food Item Card Component here

 const [itemCount,setItemCount] =useState(0)

  return (
    <div className="foodItem_card">
      <div className="foodItem_img_container">
        <img className="foodItem_img" src={image} alt={name} />
        {
            !itemCount?<img className="add" onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}  alt="Add"/>
            :<div className="foodItem_counter">
                <img onClick ={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red}  alt="Remove"/>
                <p>{itemCount}</p>
                <img onClick ={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}  alt="add"/>
                </div>
        }
      </div>
      <div className="foodItem_info">
        <div className="fooItem_name_rating">
            <h3>{name}</h3>
            <img src={assets.rating_starts} alt=""/>
        </div>
        <p className="foodItem_desc"> {description}</p>
        <p className="foodItem_price"> Rs.{price}</p>
        
      </div>    
    </div>
  );
};

export default FoodItem_card;


*/

/*

import React, { useContext } from "react";
import './FoodItem_card.css';
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext/StoreContext";

const FoodItem_card = ({ id, name, description, price, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="foodItem_card">
      <div className="foodItem_img_container">
        <img className="foodItem_img" src={image} alt={name} />
        {
          !cartItems[id] ? (
            <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          ) : (
            <div className="foodItem_counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
          )
        }
      </div>
      <div className="foodItem_info">
        <div className="fooItem_name_rating">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foodItem_desc"> {description}</p>
        <p className="foodItem_price"> Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem_card;

*/

import React, { useContext } from "react";
import './FoodItem_card.css';
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext/StoreContext";

const FoodItem_card = ({ id, name, description, price, image }) => {
const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="foodItem_card">
      <div className="foodItem_img_container">
        <img className="foodItem_img" src={image} alt={name} />
        {
          !cartItems[id] ? (
            <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
          ) : (
            <div className="foodItem_counter">
              <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove" />
              <p>{cartItems[id]}</p>
              <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
            </div>
          )
        }
      </div>
      <div className="foodItem_info">
        <div className="fooItem_name_rating">
          <h3>{name}</h3>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="foodItem_desc"> {description}</p>
        <p className="foodItem_price"> Rs.{price}</p>
      </div>
    </div>
  );
};

export default FoodItem_card;

