import '/src/Components/Header.css'
import Header from '../Components/Header'
import '/src/HomePage/App.css'
import '/src/HomePage/index.css'
import Footer from '../Footer/Footer'
import '/src/Footer/Footer.css'
import Contact from './Contact'

function App() {
  
  return (
   <div className='homepage'>
      <Header />
      <Contact />
      <Footer />
   </div>
  )
}

export default App