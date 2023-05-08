import React from 'react'
import { Pagination } from 'antd';
import { checkedItems, setCheckedItems} from '../HomePage/App.jsx'
import { Link } from 'react-router-dom'

function Products({checkedItems, setCheckedItems}) {   

    let items = checkedItems[0].map((item) => (
        <div className='item' key={item.id}>
            <div className='image'><img src={item.image}/></div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.min_price}zł</h3>
            <Link to='/item'><button>Zobacz więcej</button></Link>
        </div>
    ))


    return (
        <div className='shop'>
            <h2>Wszystkie produkty</h2>
            <div className='products'>
            {items}
            </div>
            <Pagination defaultCurrent={1} total={8} />;
        </div>
    )
}

export default Products;