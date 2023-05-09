import React, { useState, useEffect } from 'react'
import { Input} from 'antd';
import { Phone, ShoppingCart, Truck, } from 'react-feather';
import CartPrompt from './CartPrompt.jsx'
import { Link, useLocation } from 'react-router-dom'

const { Search } = Input;

function Header({cart, setCart}) {

    const location = useLocation();

    const [showCart, setShowCart] = useState();
    const [show, setShow] = useState(true);

    const handleChange = () => {
        setShowCart(!showCart)
        console.log(cart.length)
    }


    useEffect(() => {
      if (typeof window !== "undefined") {
        const handleScroll = () => setShow(window.pageYOffset < 10);
        const handleResize = () => setShow(window.innerWidth > 440);
    
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
          window.removeEventListener("resize", handleResize);
        };
      }
    }, []);


    return (
        <div className='header'>
                <div className='navbar--top'>
                    <h2>krzysztof.cwynar@biuro-hossa.eu</h2>
                    <h2>+48 601 308 388</h2>
                </div>
            <div className='navbar' style={{top: show ? '45px' : '0px' , transition: '0.1s ease-out', height: show ? '100px' : '70px'}}>
                <div className='#'>
                <Link to="/"><img src='../../src/assets/logo.png' style={{height: show ? '85px' : '50px', transition: '0.1s ease-out'}}/></Link>
                </div>
                <div className='navbar--right'>
                    <div className='search--bar'>
                        <Search status="warning" style={{width: 500}}/>
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
                            }<Link to="#"><ShoppingCart size={30} color='#000d2a' onClick={handleChange}/>KOSZYK</Link></li>
                            {showCart && (
                                <div id="cart-prompt">
                                <CartPrompt cart={cart} setCart={setCart} />
                            </div>)}
                            
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;