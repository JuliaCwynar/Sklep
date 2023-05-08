import React from 'react'
import TableData from '../Components/Table'
import { DeleteOutlined } from '@ant-design/icons'
import { Select, InputNumber } from 'antd';

function CartItem(item) {
return (
    <div className='cart--item'>
         <p className='item--title'>Swisspor LAMBDA mega WHITE ®fasada grafit λ 0,031</p>
        <div className='cart--item--row'>
            <img src='src/assets/images/EPS70-038paczka600x382.png'></img>
            <div className='cart--description'>
                <p>Ilość
                    <InputNumber 
                        size='small'
                        min={1} 
                        max={10} 
                        defaultValue={item.name}
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                    />
                </p>
                <p>Grubość
                <Select
                        size='small'
                        defaultValue={item.thickness}
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                                ]}
                    /></p>
                <p>Frez
                <Select
                        size='small'
                        defaultValue="lucy"
                        style={{ position: 'relative', top: '-5px', width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                            { value: 'Yiminghe', label: 'yiminghe' },
                                ]}
                    /></p>
            </div>
        </div>
        <TableData />
        <div className='item--info2'>
            <h3>Suma brutto: </h3>  
        </div>
        <DeleteOutlined style={{position: 'relative', bottom: '35px',right: '15px', float: 'right', fontSize: '20px'}}/>
    </div>
    
)
}

export default CartItem