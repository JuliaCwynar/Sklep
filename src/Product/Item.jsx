import '../Components/Header.css'
import '../HomePage/App.css'
import Menu from '../Components/Menu'
import '../Product/SingleProduct.css'
import '../Components/Menu.css'
import SingleProduct from '../Product/SingleProduct'
import React, { useState } from 'react'
import data from '../assets/data.json'
import { cart, setCart } from '../HomePage/App.jsx'
import { checkedItems, setCheckedItems} from '../HomePage/App.jsx'
import {item, setItem} from '../HomePage/Products.jsx'

function Item() {


  return (
      <div className='main'>
        <SingleProduct cart={cart} setCart={setCart} item={item} setItem={setItem}/>
      </div>
  )
}

export default Item
