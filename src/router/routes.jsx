import { ROUTES_PATHS } from './routes-paths';
import ContactPage from '../Contact/ContactPage.jsx';
import Products from '../HomePage/Products';
import SingleProduct from '../Product/SingleProduct.jsx'
import Cart from '../ShoppingCart/Cart.jsx'
import Menu from '../Components/Menu'

const routesPartial = [
  {
    path: ROUTES_PATHS.MAIN,
    element:  (<div className='main'>
      <Menu/>
                     <Products />
                 </div>)
  },
  {
    path: ROUTES_PATHS.SINGLE,
    
    element:
        <SingleProduct />
  },
  {
    path: ROUTES_PATHS.CART,
    element: <Cart />
  },
  {
    path: ROUTES_PATHS.CONTACT,
    element: <ContactPage />
  },
];

export const routes = routesPartial.map((route) => ({
  ...route,
}));