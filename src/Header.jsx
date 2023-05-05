import React, { useState, useEffect } from 'react'
import { ShoppingCartOutlined, PhoneOutlined, SearchOutlined } from '@ant-design/icons'

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
                        <input type="text" id="search-bar" placeholder=""/>
                        <SearchOutlined style={{ fontSize: '25px', color: '#000d2a70', position:'relative', right:'35px', top:'5px'}}/>
                    </div>
                    <ul>
                        <li><ShoppingCartOutlined style={{ fontSize: '40px', color: '#000d2a'}}/><a href="item.html">DOSTAWA</a></li>
                        <li><ShoppingCartOutlined style={{ fontSize: '40px', color: '#000d2a'}} /><a href="#">KOSZYK</a></li>
                        <li><PhoneOutlined style={{ fontSize: '40px', color: '#000d2a'}}/><a href="#">KONTAKT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;