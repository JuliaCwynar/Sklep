import React from 'react'
import data from '/src/assets/data.json'
import { Pagination } from 'antd';

function Products({checkedItems, setCheckedItems}) {   

    let items = checkedItems[0].map((item) => (
        <div className='item' key={item.id}>
            <div className='image'><img src={item.image}/></div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.min_price}zł</h3>
            <a href='item.html'><button>Zobacz więcej</button></a>
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