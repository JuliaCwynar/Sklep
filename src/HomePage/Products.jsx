import React from 'react'
import data from '/src/assets/data.json'
import { Pagination } from 'antd';

function Products({checkedItems, setCheckedItems}) {   

    let filteredItems = data.filter((item) => checkedItems.includes(item.category));

    let items = data.map((item) => (
        <div className='item' key={item.id}>
            <div className='image'><img src={item.image}/></div>
            <h1>{item.name}</h1>
            <h2>{item.description}</h2>
            <h3>{item.min_price}zł</h3>
            <button>Zobacz więcej</button>
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