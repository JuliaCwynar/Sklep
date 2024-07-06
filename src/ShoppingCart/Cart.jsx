import { Button } from 'antd';
import CartItem from './CartItem'
import ContactForm from '../Components/ContactForm'
import './Cart.css'
import ReCAPTCHA from 'react-google-recaptcha'; // Import reCAPTCHA component
import { useRef, useState } from 'react';
import axios from 'axios';


function Cart() {
    const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email:'',
    phone:'',
    city: '',
    postal:'',
    street:'',
    homenr: '',
    apartnr: '',
    nip: '',
  });
  const [deliveryData, setDeliveryData] = useState({
    name: '',
    email:'',
    phone:'',
    city: '',
    postal:'',
    street:'',
    homenr: '',
    apartnr: '',

  });
      const siteKey = '6Ldtp1goAAAAAME-h9AmqEVlxcexMqH6YUC2Vo0U'
     const [cart, setCart ] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const captchaRef = useRef('1')
    function calculateTotalCost(cart) {
  let totalCost = 0;

  for (const item of cart) {
    if (item.price && item.quantity) {
      totalCost += parseFloat(item.price) * parseInt(item.quantity);

    }
  }
  return totalCost;
}



const items = cart.length > 0 ? (
  cart.map((item, index) => (
    <CartItem key={index} item={item} setCart={setCart} />
  ))
) : null;

  const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/order/', {
            cartInfo:{
                name: userData.name,
                surname: '',
                email: userData.email,
                phone: userData.phone,
                city: userData.city,
                postal: userData.postal,
                street: userData.street,
                homenr: userData.homenr,
                apartnr: userData.apartnrm,
                nip: userData.nip,
                priceNetto: parseFloat(calculateTotalCost(cart)).toFixed(2),
                ship: calculateTotalCost(cart)> 1000 ? 0: 100 ,
                vat: parseFloat((calculateTotalCost(cart)*100*0.23)/100).toFixed(2),
                sum: parseFloat((calculateTotalCost(cart)*100*1.23)/100).toFixed(2),
                wholeCart: cart
            },
            deliveryData: {
                name: deliveryData.name,
                phone: deliveryData.phone,
                city: deliveryData.city,
                postal: deliveryData.postal,
                street: deliveryData.street,
                homenr: deliveryData.homenr,
                apartnr: deliveryData.apartnrm,
            }
        })
    };
  
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
                    <ContactForm data={userData} setData={setUserData} deliveryData={deliveryData} setDeliveryData={setDeliveryData}/>   
                    <div className='cart--summary'>
                        <h2>Podsumowanie zamówienia</h2>
                        <div className='summary--info'>
                            <span className='p--col'><p>Koszyk (netto)</p></span><p>{parseFloat(calculateTotalCost(cart)).toFixed(2)} zł</p>
                            <span className='p--col'><p>Dostawa</p></span><p>{calculateTotalCost(cart)> 1000 ? '0 zł': '100 zł' }</p>
                            <span className='p--col'><p>VAT</p></span><p>{parseFloat((calculateTotalCost(cart)*100*0.23)/100).toFixed(2)} zł</p>
                            <span className='p--col'><p >Suma</p></span><p>{parseFloat((calculateTotalCost(cart)*100*1.23)/100).toFixed(2)} zł</p>
                        </div>
                    </div>
                    <div className='cart--total'>
                        <form>
                            <p style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}><ReCAPTCHA sitekey={siteKey} ref={captchaRef} /></p>
                        <Button onClick={handleSubmit} size='large' type="primary">Złóż zamówienie</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart