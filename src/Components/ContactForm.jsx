import React from 'react'
import { Input } from 'antd';

function ContactForm() {
    return (
        <div className='data'>
            <h2>Dane</h2>
            <div className='insert--data'>
                <label>Imię</label>
                <Input/>
                <label>Nazwisko</label>
                <Input/>
                <label>Adres e-mail</label>
                <Input/>
                <div className='data--row'>
                    <div className='data--column'>
                        <label>Miejscowość</label>
                        <Input/>
                    </div>
                    <div className='data--column'>
                        <label>Kod pocztowy</label>
                        <Input/>
                    </div>
                </div>
                <label>Ulica</label>
                <Input/>
                <div className='data--row'>
                    <div className='data--column'>
                        <label>Numer domu</label>
                        <Input/>
                    </div>
                    <div className='data--column'>
                        <label>Nr mieszkania</label>
                        <Input/>
                    </div>
                </div>
                <label>NIP</label>
                <Input/>
            </div>
        </div>
    )
}

export default ContactForm