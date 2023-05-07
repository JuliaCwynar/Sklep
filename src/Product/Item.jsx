import '../Components/Header.css'
import Header from '../Components/Header'
import '../HomePage/App.css'
import Menu from '../Components/Menu'
import '../Product/SingleProduct.css'
import '../Components/Menu.css'
import SingleProduct from '../Product/SingleProduct'

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
