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
import { cart, setCart} from '../Product/Item.jsx'

function App() {

  const [checkedItems, setCheckedItems] = useState([data]);

  return (
   <div className='homepage'>
      <Header cart={cart} setCart={setCart}/>
      <div className='main'>
        <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
        <Products checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
      </div>
      <Footer />
   </div>
  )
}

export default App