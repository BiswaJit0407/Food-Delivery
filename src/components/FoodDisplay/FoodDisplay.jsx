/*

import React from 'react'
import './FoodDisplay.css'
import { food_list } from '../../assets/assets'
const FoodDisplay = () => {
  return (
    <div className='food_display'>
        <h2>Top Dishes near me</h2>
        <div className='food_display_list'>
            {
                food_list.map((item,index)=>{
                    return (
                        <div key={index} className='food_card'>
                            <img src={item.image} alt={item.image} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                        </div>
                    )
                })
            }
        </div>
      
      
    </div>
  )
}

export default FoodDisplay

*/

/*


import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext/StoreContext'
import FoodItem_card from '../FoodItem Card/FoodItem_card'
const FoodDisplay = (category) => {

const {food_list} = useContext(StoreContext);
return (
<div className='food_display' id='food_display'>
<h2>Top Dishes near me</h2>
<div className='food_display_list'>
  {food_list.map((item, index) => (
    <FoodItem_card
      key={index}
      id={item._id}
      name={item.name}
      description={item.description}
      price={item.price}
      image={item.image}
    />
  ))}
</div>
</div>
);
};

export default FoodDisplay;


*/



import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext/StoreContext';
import FoodItem_card from '../FoodItem Card/FoodItem_card';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food_display' id='food_display'>
      <h2>Top Dishes near me</h2>
      <div className='food_display_list'>
        {food_list.map((item) => (
          (category === 'All' || category === item.category) && (
            <FoodItem_card
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;

