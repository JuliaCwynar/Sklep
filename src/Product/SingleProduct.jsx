import React, { useState } from 'react'
import data from '../assets/data_exp.json'
import { Button, InputNumber, Select } from 'antd';
import TableData from '../Components/Table';
import '../Components/Header.css'
import '../HomePage/App.css'
import '../Product/SingleProduct.css'
import '../Components/Menu.css'

function SingleProduct({cart, setCart}) {
    
    const [quantity, setQuantity] = useState(1);
    const [thickness, setThickness] = useState(10)

    const handleChange = () => {
        const newItem = {
            item: data,
            thickness: thickness,
            quantity: quantity,
          };
          setCart(prevCart => [...prevCart, newItem]);
          console.log(cart);
        }

    return (
        <div className='product'>
            <div className='product--row'>
                <h1>{data.name}</h1>
            </div>
            <div className='product--row'>
                <div className='product--description'>
                    <img src={data.image}/>
                    <div className='description--table'>
                        <p><b>Lambda</b>{data.lambda}</p>
                        <p><b>Producent</b>{data.producent}</p>
                        <p><b>Kolor</b>{data.color}</p>
                        <p><b>Typ</b>{data.type}</p> 
                    </div>
                </div>
                <div className='product--pricing'>
                    <h3>Cena <b>{data.price}zł</b></h3>
                    <span>VAT: {data.price*0.23}</span>
                    <p>Dostawa</p>
                    <p>Stan magazynowy: <span>Dostępność duża</span></p>
                    <form>
                    <p>Grubość
                    <Select
                        size='medium'
                        defaultValue={10}
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 10, label: '10' },
                            { value: 20, label: '20' },
                            { value: 30, label: '30' },
                                ]}
                        onChange={value => setThickness(value)}
                    /></p>
                    <p>Frezowany
                    <Select
                        size='medium'
                        defaultValue="Nie"
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'tak', label: 'Tak' },
                            { value: 'nie', label: 'Nie' },
                                ]}

                    /></p>
                <h4>Ilość m<span style={{fontSize: 13, position: 'relative', bottom: 6}}>3</span> w opakowaniu: </h4>
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
                <h2>Oblicz ilość potrzebnych paczek dla <span style={{fontWeight: 'bold'}}>{data.name}</span></h2>
                <TableData/>
            </div>
        </div>
    )
}

export default SingleProduct;