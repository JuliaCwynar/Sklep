/* eslint-disable react/prop-types */
import TableData from '../Components/Table'
import { Select, InputNumber, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

function CartItem({ item, setCart }) {
    function removeItemFromCart(item) {
        setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const itemIndex = updatedCart.findIndex((cartItem) => cartItem === item);
        console.log(itemIndex)
    if (itemIndex !== -1) {
        updatedCart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart; 
    }
    return prevCart; 
    });
    }


    function updateItemFromCart(item){

        setCart((prevCart) => {
        const updatedCart = [...prevCart];
        const itemIndex = updatedCart.findIndex((cartItem) => cartItem === item);
    if (itemIndex !== -1) {
        updatedCart[itemIndex] = item
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart; 
    }
    return prevCart; 
    });

    }
    function updateQuantity(item, quantity){
        item.quantity = quantity
        updateItemFromCart(item)
    }
    function updateFrez(item, frez){
        item.frez = frez
        updateItemFromCart(item)
    }
    function updateThickness(item, thickness){
        item.thickness = thickness
        updateItemFromCart(item)
    }
return (
    <div className='cart--item'>
         <p className='item--title'>{item.name}</p>
        <div className='cart--item--row'>
            <a href="link address"><img src={`http://localhost:8000${item.image}` }/></a>
            <div className='cart--description'>
                <p>Ilość
                    <InputNumber 
                        size='small'
                        defaultValue={item.quantity}
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        onChange={(value) => updateQuantity(item, value)}
                    />
                </p>
                <p>Grubość
                 <Select 
                        size='small'
                        defaultValue={item.thickness}
                        style={{ position: 'relative', top: '-5px',width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={item.available_thickness.map(thickness => ({ value: thickness, label: thickness }))}
                        onChange={(value) => updateThickness(item, value)}
                    /></p>
                <p>Frez
                <Select
                        size='small'
                        defaultValue={item.frez}
                        style={{ position: 'relative', top: '-5px', width: '10vw', marginRight: '1vw', float: 'right' }}
                        options={[
                            { value: 'Tak', label: 'Tak' },
                            { value: 'Nie', label: 'Nie' },
                                ]}
                        onChange={(value) => updateFrez(item, value)}
                    /></p>
            </div>
        </div>
        <TableData item={item}/>
        <div className='item--info2'>
            <h3>Suma brutto: {parseFloat((parseFloat(item.price) * parseInt(item.quantity) * 1.23 *100)/100).toFixed(2)} zł</h3>  
        </div>
        <Button style={{position: 'relative', bottom: '35px',right: '15px', float: 'right', fontSize: '20px'}} onClick={() => removeItemFromCart(item)}><DeleteOutlined style={{ justifyContent: 'center', margin: 'auto', display: 'flex' }} /></Button>
    </div>
    
)
}

export default CartItem