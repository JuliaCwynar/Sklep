import '../Components/Header.css'
import Header from '../Components/Header'
import '../HomePage/App.jsx'
import '../HomePage/Products.css'
import '../Components/Menu.css'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
import Cart from '../ShoppingCart/Cart'
import '../ShoppingCart/Cart.css'
import { cart, setCart} from '../Product/Item.jsx'

function Bag() {

  console.log(cart)

  return (
   <div className='homepage'>
      <Header cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart}/>
      <Footer />
   </div>
  )
}

export default Bag