import React from 'react'
import { Input, Button } from 'antd'
import './Contact.css'
import { LineHeightOutlined, MailOutlined, PhoneOutlined, PushpinOutlined, UserOutlined } from '@ant-design/icons'
import MapCom from './Map.jsx'
import { LineWeight } from '@mui/icons-material'

function Contact() {   



    return (
        <div className='contact'>
            <div className='contact--column'>
                <h2>Skontaktuj się</h2>
                <p>Imię i nazwisko<Input /></p>
                <p>Adres e-mail<Input /></p>
                <p>Temat<Input /></p>
                <p>Wiadomość<Input.TextArea style={{height: '10vw'}}/></p>
                <div style={{justifyContent: 'center', margin: 'auto', display: 'flex'}}>
                    <Button style={{width: '15%'}}>Wyślij</Button>
                </div>
            </div>
            <div className='contact--column'>
                <h2>Dane</h2>
                <div className='contact--data'>
                    <p><UserOutlined style={{marginRight: '1vw'}}/>Krzysztof Cwynar</p>
                    <p><PushpinOutlined style={{marginRight: '1vw'}}/>ul. Energetyków 83</p>
                    <p style={{marginLeft: '2.5vw', lineHeight: '0vw'}}>44-200 Rybnik</p>
                    <p><PhoneOutlined style={{marginRight: '1vw'}}/>+48 601 308 388</p>
                    <p><MailOutlined style={{marginRight: '1vw'}}/>krzysztof.cwynar@biuro-hossa.eu</p>
                    <div className='contact--map'>
                    <MapCom />
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;