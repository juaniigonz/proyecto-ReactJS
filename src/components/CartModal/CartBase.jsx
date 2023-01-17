import {useContext} from 'react'
import Button from '../Btn/Button'
import { cartContext} from '../../contextStorage/cartContext'
import "./cart.css"

function CartBase() {
    const {cart, deleteItemCart } = useContext(cartContext)
  return (
    cart.map(item=>
    <tr className='itemCartTable' key={item.id}>
        <td>
            <img className='imgCart' src={item.imagen} alt={item.producto} />
        </td>
        <td>{item.producto}</td>
        <td>$ {item.precio}</td>
        <td>{item.count}</td>
        <td><Button funcBtn={()=>deleteItemCart(item.id)}>X</Button></td>
        <td>$ {item.count * item.precio}</td>
    </tr>
  ))
}

export default CartBase