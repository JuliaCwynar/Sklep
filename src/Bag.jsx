import './Header.css'
import Header from './Header'
import './App.css'
import './Products.css'
import './Menu.css'
import Footer from './Footer'
import './Footer.css'
import Cart from './Cart'
import './Cart.css'

function Bag() {


  return (
   <div className='homepage'>
      <Header />
      <Cart />
      <Footer />
   </div>
  )
}

export default Bag