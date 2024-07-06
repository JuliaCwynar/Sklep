import { Button, InputNumber, Select } from 'antd';
import TableData from '../Components/Table';
import '../Components/Header.css'
import '../HomePage/App.css'
import '../Product/SingleProduct.css'
import '../Components/Menu.css'
import { useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import axios from 'axios';
import { useCart } from '../contexts/cart-context';


export default function SingleProduct() {
    const {itemId} = useParams();
const [item, setitem] = useState();
    const getData = async (id) => {
        const { data } = await axios.get(`http://localhost:8000/styrofoam/${id}/`);

        setitem(data);
    };
    useEffect(() => {
        getData(itemId);
    },[itemId, setitem]);

    const [quantity, setQuantity] = useState(1);
    const [thickness, setThickness] = useState(item ? item.available_thickness[0] : '')
    const [frez, setFrez] = useState('Nie')
    const { cart, setCart } = useCart();
   const handleChange = () => {
        const newItem = {
            item: item.id,
            thickness: thickness,
            quantity: quantity,
            image: item.image,
            name: item.name,
            frez: frez,
            price: item.price,
            available_thickness: item.available_thickness,
            pieces: item.pieces,
            square_meters: item.square_meters,
            cubic_meters: item.cubic_meters,
          };
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart([...storedCart, newItem]);

        const updatedCart = [...storedCart, newItem];

        localStorage.setItem('cart', JSON.stringify(updatedCart));            
        }
    console.log(item)
    if (!item) {
        return 'loading';
    }
    return (
        <div className='product'>
            <div className='product--row'>
                <h1>{item.name}</h1>
            </div>
            <div className='product--row'>
                <div className='product--description'>
                    <img src={`http://localhost:8000${item.image}`}/>

                    <div className='description--table'>
                        <p><b>Lambda</b>{item.lambda_d}</p>
                        <p><b>Producent</b>{item.manufacturer}</p>
                        <p><b>Kolor</b>{item.color}</p>
                        <p><b>Typ</b>{item.purpose}</p> 
                    </div>
                </div>
                <div className='product--pricing'>
                    <h3>Cena <b>{item.price}zł</b></h3>
                    <span>VAT: {Math.ceil(item.price*0.23*100, 2)/100} zł</span>
                    <p>Dostawa</p>
                    <p>Stan magazynowy: <span>{item.availability}</span></p>
                    <form>
                    <p>Grubość
                    <Select
                        size='medium'
                        defaultValue='-'
                        style={{ position: 'relative', top: '-5px',width: window.innerWidth > 600 ? '10vw' : '40vw', marginRight: '1vw', float: 'right' }}
                        options={item.available_thickness.map(thickness => ({ value: thickness, label: thickness }))}
                        onChange={value => setThickness(value)}
                    /></p>
                    <p>Frezowany
                    <Select
                        size='medium'
                        defaultValue="Nie"
                        style={{ position: 'relative', top: '-5px',width: window.innerWidth > 600 ? '10vw' : '40vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'Tak', label: 'Tak' },
                            { value: 'Nie', label: 'Nie' },
                                ]}
                        onChange={value => setFrez(value)}

                    /></p>
                <h4>Ilość m<span style={{fontSize: 13, position: 'relative', bottom: 6}}>3</span> w opakowaniu: {item.cubic_meters[item.available_thickness.indexOf(thickness)]}  </h4>
                <div className='product--calculated'>
                    <InputNumber 
                        size='large'
                        min={1} 
                        max={100} 
                        defaultValue={1}
                        style ={{float: 'left'}}
                        onChange={value => setQuantity(value)}
                    />
                        <Button 
                            size='large' 
                            type="primary"
                            style ={{float: 'right'}}
                            onClick={() => handleChange()}
                            >Dodaj do koszyka
                        </Button>
                </div>
                </form>
            </div>
            </div>
            <div className='product--calculations'>
                <h2>Oblicz ilość potrzebnych paczek dla <span style={{fontWeight: 'bold'}}>{item.name}</span></h2>
                <TableData item={{ ...item, thickness: thickness, quantity: quantity,  }} />
            </div>
        </div>
    )
}