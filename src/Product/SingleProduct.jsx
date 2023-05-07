import React from 'react'
import data from '../assets/data_exp.json'
import { Button, InputNumber, Select } from 'antd';
import TableData from '../Components/Table';

function SingleProduct() {   


    return (
        <div className='product'>
            <div className='product--row'>
                <h1>{data.name}</h1>
            </div>
            <div className='product--row'>
                <div className='product--description'>
                    <img src={data.image}/>
                    <div className='description--table'>
                        <p><b>Lambda</b></p> 
                        <p>{data.lambda}</p>
                        <p><b>Producent</b></p>
                        <p>{data.producent}</p>
                        <p><b>Kolor</b></p>
                        <p>{data.color}</p>
                        <p><b>Typ</b></p> 
                        <p>{data.type}</p>
                    </div>
                </div>
                <div className='product--pricing'>
                    <h3>Cena <b>{data.price}zł</b></h3>
                    <span>VAT: {data.price*0.23}</span>
                    <p>Dostawa</p>
                    <p>Stan magazynowy: <span>Dostępność duża</span></p>
                    <p>Grubość
                <Select
                        size='medium'
                        defaultValue="lucy"
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                                ]}
                    /></p>
                    <p>Grubość
                <Select
                        size='medium'
                        defaultValue="lucy"
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                                ]}
                    /></p>
                <h4>Ilość m^3 w opakowaniu: </h4>
                <div className='product--calculated'>
                    <InputNumber 
                        size='large'
                        min={1} 
                        max={10} 
                        defaultValue={3}
                        style ={{float: 'left'}}
                    />
                        <Button 
                            size='large' 
                            type="primary"
                            style ={{float: 'right'}}
                            >Dodaj do koszyka
                        </Button>
                </div>
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