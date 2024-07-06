import './CartPrompt.css';
import { Button } from 'antd';
import { Link,} from 'react-router-dom';

function CartPrompt() {
     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];

    let items = storedCart.map((product) => (
        <div className='cart--prompt--item' key={product.id}>
            <div>
                <h1>{product.name}</h1>
            </div>
            <div className='cart--item--row'>
            <div className='cart--item--column'>
                <div className='image'><img src={`http://localhost:8000${product.image}`}/></div>
            </div>
                <div className='cart--item--column'>
                <h2>Ilość:<span style={{fontWeight: 700}}> {product.quantity}</span></h2>
                <h2>Grubość:<span style={{fontWeight: 700}}> {product.thickness}</span></h2>
                <h2>Frezowany:<span style={{fontWeight: 700}}> {product.frez}</span></h2>
            </div>
            </div>
        </div>
    ))
    
    return (
        <div className='cart--prompt'>
            <div className='cart--element' >
                {items}
            </div>
            <div className='cart--button'>
                <Link to="/bag"><Button type="primary" style={{textTransform: 'uppercase', backgroundColor: '#c89017'}}>Przejdź do koszyka</Button></Link>
            </div>
        </div>
    )
}

export default CartPrompt