import '/src/Components/Header.css'
import Header from '../Components/Header'
import './App.css'
import Menu from '../Components/Menu'
import Products from './Products'
import './Products.css'
import '/src/Components/Menu.css'
import { useState } from 'react'
import Footer from '../Footer/Footer'
import '/src/Footer/Footer.css'

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
