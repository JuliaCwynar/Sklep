import '../Components/Header.css'
import Header from '../Components/Header'
import '../HomePage/App.css'
import Menu from '../Components/Menu'
import '../Product/SingleProduct.css'
import '../Components/Menu.css'
import SingleProduct from '../Product/SingleProduct'
import React, { useState } from 'react'
import data from '../assets/data.json'


function Item() {


  const [checkedItems, setCheckedItems] = useState([data]);
  const [cart, setCart] = useState([]);

  return (
   <div className='homepage'>
      <Header cart={cart} setCart={setCart}/>
      <div className='main'>
        <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
        <SingleProduct cart={cart} setCart={setCart}/>
      </div>
   </div>
  )
}

export default Item
export let cart = [];
export let setCart = () => {};