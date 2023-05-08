import '../Components/Header.css'
import '../HomePage/App.jsx'
import '../HomePage/Products.css'
import '../Components/Menu.css'
import '../Footer/Footer.css'
import Cart from '../ShoppingCart/Cart'
import '../ShoppingCart/Cart.css'
import { cart, setCart} from '../HomePage/App.jsx'

function Bag() {

  return (
      <Cart cart={cart} setCart={setCart}/>
  )
}

export default Bag