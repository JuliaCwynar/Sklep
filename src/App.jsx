import './Header.css'
import Header from './Header'
import './App.css'
import Menu from './Menu'
import Products from './Products'
import './Products.css'
import './Menu.css'

function App() {

  return (
   <div className='homepage'>
      <Header />
      <div className='main'>
        <Menu />
        <Products />
      </div>
   </div>
  )
}

export default App
