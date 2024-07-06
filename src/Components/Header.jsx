import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import { Phone, ShoppingCart, Truck } from 'react-feather';
import CartPrompt from './CartPrompt.jsx';
import { Link, useLocation } from 'react-router-dom';
import { useFilter } from '../contexts/filter-context';

const { Search } = Input;

function Header() {
  const { filter, setFilter } = useFilter();
  const onSearch = (value, _e, info) => {
    setFilter({'search': [value]});
    console.log(filter)
  };
  const cart = [];
  const location = useLocation();
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(true);

  const handleChange = () => {
    setShowCart(!showCart);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const cartPrompt = document.getElementById('cart-prompt');
      if (cartPrompt && !cartPrompt.contains(event.target)) {
        setShowCart(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setShow(window.pageYOffset < 10);
    const handleResize = () => setShow(window.innerWidth > 440);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
        <div className='header'>
                <div className='navbar--top'>
                    <h2>krzysztof.cwynar@biuro-hossa.eu</h2>
                    <h2>+48 601 308 388</h2>
                </div>
            <div className='navbar' style={{top: show ? '45px' : '0px' , transition: '0.1s ease-out', height: show ? '100px' : '70px'}}>
                <div className='#'>
                <Link to="/"><img src='http://localhost:8000/static/logo.jpg' style={{height: show ? '85px' : '50px', transition: '0.1s ease-out'}}/></Link>
                </div>
                <div className='navbar--right'>
                    <div className='search--bar'>
                        <Search status="warning" onSearch={onSearch} style={{width: 500}}/>
                    </div>
                    <ul>
                        <li><Link to="#"><Truck size={30} color='#000d2a'/>DOSTAWA</Link></li>
                        <li><Link to="/contact"><Phone size={30} color='#000d2a'/>KONTAKT</Link></li>
                        <div className='header--cart'>
                            <li>{cart.length > 0 && (
                                <div className='cart--size'>
                                    {cart.length}
                                </div>
                            )
                            }<Link to="#" onClick={handleChange}><ShoppingCart size={30} color='#000d2a' />KOSZYK</Link></li>
                            {showCart && (
                                <div id="cart-prompt">
                                <CartPrompt />
                            </div>)}
                            
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;