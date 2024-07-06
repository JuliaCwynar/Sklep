import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { CartProvider } from '../contexts/cart-context'
import {FilterProvider} from '../contexts/filter-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FilterProvider>
    <CartProvider>
      <App />
      </CartProvider>
      </FilterProvider>
    </BrowserRouter>
  </React.StrictMode>
)
