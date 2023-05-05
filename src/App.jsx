import './Header.css'
import Header from './Header'
import './App.css'
import Menu from './Menu'
import Products from './Products'
import './Products.css'
import './Menu.css'
import { useState } from 'react'
import Footer from './Footer'
import './Footer.css'

function App() {

  const [checkedItems, setCheckedItems] = useState([]);

  return (
   <div className='homepage'>
      <Header />
      <div className='main'>
        <Menu checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
        <Products checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
      </div>
      <Footer />
   </div>
  )
}

export default App
