import {useContext} from 'react'
import Button from '../Btn/Button'
import { cartContext} from '../../contextStorage/cartContext'


function CartBase() {
    const {cart, deleteItemCart } = useContext(cartContext)
  return (
    cart.map(item=>
    <tr key={item.id}>
        <td>
            <img src={item.imagen} alt={item.producto} />
        </td>
        <td>{item.producto}</td>
        <td>$ {item.precio}</td>
        <td>{item.count}</td>
        <td><Button funcBtn={()=>deleteItemCart(item.id)}>x</Button></td>
        <th>$ {item.count * item.precio}</th>
    </tr>
  ))
}

export default CartBase