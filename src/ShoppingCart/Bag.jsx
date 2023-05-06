import '/src/Components/Header.css'
import Header from '../Components/Header'
import '/src/HomePage/App.jsx'
import '/src/HomePage/Products.css'
import '/src/Components/Menu.css'
import Footer from '../Footer/Footer'
import '/src/Footer/Footer.css'
import Cart from '/src/ShoppingCart/Cart'
import '/src/ShoppingCart/Cart.css'

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