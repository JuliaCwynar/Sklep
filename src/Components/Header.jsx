import React, { useState, useEffect } from 'react'
import { Input} from 'antd';
import { Phone, ShoppingCart, Truck, } from 'react-feather';

const { Search } = Input;

function Header() {

    const [show, setShow] = useState(false);

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
                <a href="link address"><img src='src/assets/logo.png' style={{height: show ? '85px' : '50px', transition: '0.1s ease-out'}}/></a>
                </div>
                <div className='navbar--right'>
                    <div className='search--bar'>
                        <Search status="warning" style={{width: 500}}/>
                    </div>
                    <ul>
                        <li><a href="item.html"><Truck size={30} color='#000d2a'/>DOSTAWA</a></li>
                        <li><a href="contact.html"><Phone size={30} color='#000d2a'/>KONTAKT</a></li>
                        <li><a href="bag.html"><ShoppingCart size={30} color='#000d2a' />KOSZYK</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;