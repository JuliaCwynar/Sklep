import './Header.css'
import Header from './Header'
import './App.css'
import Menu from './Menu'
import './SingleProduct.css'
import './Menu.css'
import SingleProduct from './SingleProduct'

function Item() {

  return (
   <div className='homepage'>
      <Header />
      <div className='main'>
        <Menu />
        <SingleProduct />
      </div>
   </div>
  )
}

export default Item
