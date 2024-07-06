import {useState} from 'react'
import { Input, Button } from 'antd'
import './Contact.css'
import { MailOutlined, PhoneOutlined, PushpinOutlined, UserOutlined } from '@ant-design/icons'
import MapCom from './Map.jsx'
import axios from 'axios'

function Contact() {   

  const [contact, setContact] = useState({
    name: '',
    address: '',
    topic: '',
    message: '',
  });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/contact/', {
            name: contact.name,
            address: contact.address,
            topic: contact.topic,
            message: contact.message,
        })
    };

    return (
        
        <div className='contact'>
            <form>
        <div className='contact--column'>
          <h2>Skontaktuj się</h2>
           <p>Imię i nazwisko<Input onChange={(e) => setContact({ ...contact, name: e.target.value })} /></p>
          <p>Adres e-mail<Input onChange={(e) => setContact({ ...contact, address: e.target.value })} /></p>
          <p>Temat<Input onChange={(e) => setContact({ ...contact, topic: e.target.value })} /></p>
          <p>Wiadomość<Input.TextArea style={{ height: '10vw' }} onChange={(e) => setContact({ ...contact, message: e.target.value })} /></p>
          <div style={{ justifyContent: 'center', margin: 'auto', display: 'flex' }}>
            <Button onClick={handleSubmit} style={{ width: '30vw' }}>Wyślij</Button>
          </div>
        </div>
      </form>
            <div className='contact--column'>
                <h2>Dane</h2>

                <div className='contact--data'>
                    <p><UserOutlined style={{marginRight: '1vw'}}/>Krzysztof Cwynar</p>
                    <p><PushpinOutlined style={{marginRight: '1vw'}}/>ul. Energetyków 83</p>
                    <p style={{marginLeft: '2.5vw', lineHeight: '0vw'}}>44-200 Rybnik</p>
                    <p><PhoneOutlined style={{marginRight: '1vw'}}/>+48 601 308 388</p>
                    <p><MailOutlined style={{marginRight: '1vw'}}/>krzysztof.cwynar@biuro-hossa.eu</p>
                    <div className='contact--map'>
                    {window.innerWidth > 600 &&<MapCom />}
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;