import '../Components/Header.css'
import Header from '../Components/Header'
import '../HomePage/App.jsx'
import '../HomePage/Products.css'
import '../Components/Menu.css'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
import Cart from '../ShoppingCart/Cart'
import '../ShoppingCart/Cart.css'

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