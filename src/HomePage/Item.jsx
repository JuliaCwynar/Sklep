import '/src/Components/Header.css'
import Header from '/src/Components/Header'
import './App.css'
import Menu from '/src/Components/Menu'
import '/src/Product/SingleProduct.css'
import '/src/Components/Menu.css'
import SingleProduct from '/src/Product/SingleProduct'

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
