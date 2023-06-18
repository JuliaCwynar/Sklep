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
import Cart from '../ShoppingCart/Cart.jsx'
import { Route,  Routes } from 'react-router-dom'
import ContactPage from '../Contact/ContactPage.jsx'

function App() {

  const [checkedItems, setCheckedItems] = useState([data]);
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState(null);



  return (
   <div className='homepage'>
      <Header cart={cart} setCart={setCart}/>
      <Routes>
          <Route path='/' element={
            (<div className='main'>
                      <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
                      <Products checkedItems={checkedItems} setCheckedItems={setCheckedItems} item={item} setItem={setItem}/>
                  </div>)}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='/bag' element={<Cart cart={cart} setCart={setCart}/>}/>
          <Route path='/item${item.id}' element={(<div className='main'>
                      {(window.innerWidth > 600) &&<Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>}
                      <SingleProduct cart={cart} setCart={setCart} item={item} setItem={setItem}/>
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

export let item = [];
export let setItem = () => {};