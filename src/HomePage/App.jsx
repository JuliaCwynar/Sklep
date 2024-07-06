import '../Components/Header.css'
import Header from '../Components/Header'
import './App.css'
import './Products.css'
import '../Components/Menu.css'
import Footer from '../Footer/Footer'
import '../Footer/Footer.css'
import { useRoutes } from 'react-router-dom';
import { routes } from '../router'

export function App() {
  const element = useRoutes(routes);

return (
   <div className='homepage'>
    <Header />
    {element}
    <Footer />
   </div>
)
}

export default App