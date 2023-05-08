import './CartPrompt.css'
import { Button } from 'antd'



function CartPrompt({cart, setCart}) {

    console.log(cart)

    let items = cart.map((product) => (
        <div className='cart--item' key={product.item.id}>
            <div>
                <h1>{product.item.name}</h1>
            </div>
            <div className='cart--item--row'>
            <div className='cart--item--column'>
                <div className='image'><img src={product.item.image}/></div>
            </div>
                <div className='cart--item--column'>
                <h2>Ilość:{product.quantity}</h2>
                <h2>Grubość:{product.thickness}</h2>
            </div>
            </div>
        </div>
    ))
    
    return (
        <div className='cart--prompt'>
            <div className='cart--element'>
                {items}
            </div>
            <div className='cart--button'>
                <li><a href="bag.html"><Button>Przejdź do koszyka</Button></a></li>
            </div>
        </div>
    )
}

export default CartPrompt