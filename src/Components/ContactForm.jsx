/* eslint-disable react/prop-types */
import { Input } from 'antd';
import './ContactForm.css'
function ContactForm({data, setData, deliveryData, setDeliveryData}) {


    return (
        <form>
        <div className='data'>
            <h2>Dane do faktury</h2>
            <div className='data--container'>
            <div className='insert--data'>
                <label>Nazwa Firmy / Imię i Nazwisko</label>
                <Input onChange={(e) => setData({ ...data, name: e.target.value })}/>
                <label style={{marginTop: "10px"}}>Adres e-mail</label>
                <Input onChange={(e) => setData({ ...data, email: e.target.value })}/>
                <label>Numer telefonu kontaktowego</label>
                <Input onChange={(e) => setData({ ...data, phone: e.target.value })}/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column' >
                        <label>Miejscowość</label>
                        <Input onChange={(e) => setData({ ...data, city: e.target.value })}/>
                    </div>
                    <div className='data--column'>
                        <label>Kod pocztowy</label>
                        <Input style={{margin: '5px'}} onChange={(e) => setData({ ...data, postal: e.target.value })}/>
                    </div>
                </div>
                <label>Ulica</label>
                <Input onChange={(e) => setData({ ...data, street: e.target.value })}/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column'>
                        <label>Numer domu</label>
                        <Input onChange={(e) => setData({ ...data, homenr: e.target.value })}/>
                    </div>
                    <div className='data--column'>
                        <label>Numer mieszkania</label>
                        <Input style={{margin: '5px'}} onChange={(e) => setData({ ...data, apartnr: e.target.value })}/>
                    </div>
                </div>
                <label style={{marginTop: "10px"}}>NIP (Dotyczy firm)</label>
                <Input onChange={(e) => setData({ ...data, nip: e.target.value })}/>
            </div>
            </div>
        <h2>Dane do miejsca dostawy</h2>
        <div className='data--container'>
            <div className='insert--data'>
                <label>Imię i nazwisko osoby będącej przy odbiorze dostawy</label>
                <Input onChange={(e) => setDeliveryData({ ...deliveryData, name: e.target.value })}/>
                <label>Numer telefonu kontaktowego</label>
                <Input onChange={(e) => setDeliveryData({ ...deliveryData, phone: e.target.value })}/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column' >
                        <label>Miejscowość</label>
                        <Input onChange={(e) => setDeliveryData({ ...deliveryData, city: e.target.value })}/>
                    </div>
                    <div className='data--column'>
                        <label>Kod pocztowy</label>
                        <Input style={{margin: '5px'}} onChange={(e) => setDeliveryData({ ...deliveryData, postal: e.target.value })}/>
                    </div>
                </div>
                <label>Ulica</label>
                <Input onChange={(e) => setDeliveryData({ ...deliveryData, street: e.target.value })}/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column'>
                        <label>Numer domu</label>
                        <Input onChange={(e) => setDeliveryData({ ...deliveryData, homenr: e.target.value })}/>
                    </div>
                    <div className='data--column'>
                        <label>Numer mieszkania</label>
                        <Input style={{margin: '5px'}} onChange={(e) => setDeliveryData({ ...deliveryData, apartnr: e.target.value })}/>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </form>
    )
}

export default ContactForm

