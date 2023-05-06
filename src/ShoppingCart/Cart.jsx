import { Input } from 'antd';
import CartItem from './CartItem'
import ContactForm from '/src/Components/ContactForm'




function Cart() {
    return (
        <div className='cart'>
            <div className='row'>
                <h2>Koszyk</h2>
            </div>
            <div className='row'>
                <div className='column'>
                    <h2>Szczegóły zamówienia</h2>
                    <CartItem />
                    <CartItem />
                </div>
                <div className='column'>
                    <ContactForm />
                    <div className='cart--summary'>
                        <h2>Podsumowanie zamówienia</h2>
                        <p>Suma</p>
                        <p>Dopłata</p>
                    </div>
                    <div className='cart--discount'>
                        <p>Wprowadź kod zniżkowy</p>
                        <Input/>
                    </div>
                    <div className='cart--total'>
                        <button>Złóż zamówienie</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart