import './CartPrompt.css'
import { Button } from 'antd'
import { Link, useLocation } from 'react-router-dom'


function CartPrompt({cart, setCart}) {

    const pathname = useLocation().pathname
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
                <h2>Ilość:<span style={{fontWeight: 700}}> {product.quantity}</span></h2>
                <h2>Grubość:<span style={{fontWeight: 700}}> {product.thickness}</span></h2>
            </div>
            </div>
        </div>
    ))
    
    return (
        pathname !== "/bag" ? (
            <div className='cart--prompt'>
                <div className='cart--element'>
                    {items}
                </div>
                <div className='cart--button'>
                    <Link to="/bag"><Button>Przejdź do koszyka</Button></Link>
                </div>
            </div>
        ) : null
    )
}

export default CartPrompt