import React from 'react'
import { Input } from 'antd';
import './ContactForm.css'

function ContactForm() {
    return (
        <div className='data'>
            <h2>Dane</h2>
            <div className='data--container'>
            <div className='insert--data'>
                <div className='data--row'>
                    <div className='data--column'>
                        <label>Imię</label>
                        <Input/>
                    </div>
                    <div className='data--column'>
                        <label>Nazwisko</label>
                        <Input style={{margin: '5px'}}/>
                    </div>
                </div>
                <label style={{marginTop: "10px"}}>Adres e-mail</label>
                <Input/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column' >
                        <label>Miejscowość</label>
                        <Input/>
                    </div>
                    <div className='data--column'>
                        <label>Kod pocztowy</label>
                        <Input style={{margin: '5px'}}/>
                    </div>
                </div>
                <label>Ulica</label>
                <Input/>
                <div className='data--row' style={{marginTop: "10px"}}>
                    <div className='data--column'>
                        <label>Numer domu</label>
                        <Input/>
                    </div>
                    <div className='data--column'>
                        <label>Numer mieszkania</label>
                        <Input style={{margin: '5px'}}/>
                    </div>
                </div>
                <label style={{marginTop: "10px"}}>NIP</label>
                <Input/>
            </div>
            </div>
        </div>
    )
}

export default ContactForm