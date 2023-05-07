import React from 'react'
import { Input } from 'antd'
import './Contact.css'

function Contact() {   



    return (
        <div className='contact'>
            <div className='contact--column'>
                <h2>Skontaktuj się</h2>
                <p>Imię i nazwisko<Input /></p>
                <p>Adres e-mail<Input /></p>
                <p>Temat<Input /></p>
                <p>Wiadomość<Input.TextArea /></p>
            </div>
            <div className='contact--column'>
                <h2>Dane</h2>
                <p>ul. Energetyków 83</p>
                <p>44-200 Rybnik</p>
                <p>+48 601 308 388</p>
                <p>krzysztof.cwynar@biuro-hossa.eu</p>
                <div className='contact--map'>
            
                </div>
            </div>
        </div>
    )
}

export default Contact;