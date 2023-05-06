import React from 'react'
import TableData from '../Components/Table'
import { DeleteOutlined } from '@ant-design/icons'

function CartItem() {
return (
    <div className='cart--item'>
         <p className='item--title'>Swisspor LAMBDA mega WHITE ®fasada grafit λ 0,031</p>
        <div className='cart--item--row'>
            <img src='src/assets/images/EPS70-038paczka600x382.png'></img>
            <div className='cart--description'>
                <p>Ilość</p>
                <p>Grubość</p>
                <p>Frez</p>
            </div>
        </div>
        <TableData />
        <div className='item--info2'>
            <h3>Suma brutto: </h3>  
        </div>
        <DeleteOutlined style={{position: 'relative', bottom: '40px', width: '40px', float: 'right'}}/>
    </div>
    
)
}

export default CartItem