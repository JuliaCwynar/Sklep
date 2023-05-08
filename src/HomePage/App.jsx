import '../Components/Header.css'
import Header from '../Components/Header'
import './App.css'
import Menu from '../Components/Menu'
import Products from './Products.jsx'
import './Products.css'
import '../Components/Menu.css'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
import data from '../assets/data.json'
import SingleProduct from '../Product/SingleProduct.jsx'
import Bag from '../ShoppingCart/Bag.jsx'
import { Route,  Routes } from 'react-router-dom'
import ContactPage from '../Contact/ContactPage.jsx'

function App() {

  const [checkedItems, setCheckedItems] = useState([data]);
  const [cart, setCart] = useState([]);



  return (
   <div className='homepage'>
      <Header cart={cart} setCart={setCart}/>
      <Routes>
          <Route path='/' element={(<div className='main'>
                      <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                      <Products checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                  </div>)}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/bag' element={<Bag/>}/>
          <Route path='/item' element={(<div className='main'>
                      <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                      <SingleProduct cart={cart} setCart={setCart}/>
                  </div>)}/>
      </Routes>
      <Footer />
   </div>
  )
}

export default App

export let cart = [];
export let setCart = () => {};

export let checkedItems = [];
export let setCheckedItems = () => {};