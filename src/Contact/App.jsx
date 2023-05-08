import '/src/Components/Header.css'
import Header from '../Components/Header'
import '/src/HomePage/App.css'
import '/src/HomePage/index.css'
import Footer from '../Footer/Footer'
import '/src/Footer/Footer.css'
import Contact from './Contact'
import React, { useState } from 'react'

function App() {
  
  const [cart, setCart] = useState(null);

  return (
    <div>
      <Header cart={cart} setCart={setCart}/>
      <Contact />
      <Footer />
   </div>
  )
}

export default App