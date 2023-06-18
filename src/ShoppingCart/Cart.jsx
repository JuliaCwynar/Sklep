import { Button } from 'antd';
import CartItem from './CartItem'
import ContactForm from '../Components/ContactForm'
import './Cart.css'



function Cart({cart, setCart}) {

    console.log('aaa')
    console.log(cart)
    console.log('aaa')

    let items = cart.map((item) => (
        <CartItem item={item}/>
    ) )
    
  
    return (
        <div className='cart'>
            <div className='row'>
                <h2>Koszyk</h2>
            </div>
            <div className='row'>
                <div className='column'>
                    <h2>Szczegóły zamówienia</h2>
                    {items}
                </div>
                
                <div className='column'>
                    <ContactForm />   
                    <div className='cart--summary'>
                        <h2>Podsumowanie zamówienia</h2>
                        <div className='summary--info'>
                            <span className='p--col'><p>Koszyk</p></span><p>100zł</p>
                            <span className='p--col'><p>Dostawa</p></span><p>100zł</p>
                            <span className='p--col'><p>VAT</p></span><p>199zł</p>
                            <span className='p--col'><p >Suma</p></span><p>100zł</p>
                        </div>
                    </div>
                    <div className='cart--total'>
                        <form>
                        
                        <Button size='large' type="primary">Złóż zamówienie</Button>   
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart