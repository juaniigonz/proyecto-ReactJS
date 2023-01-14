import React from 'react'
import CartWidget from './CartWidget'
import './Header.css'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <header className='header'>
        <Link to="/" className='logo'>
        <img src="/assets/knifeLogo.jpg" alt="knife" />
        </Link>
        <div className='navFlex'>
            <ul className='navLinks'>
                <Link to="/categoria/caza"><li>Caza</li></Link>
                <Link to="/categoria/defensa"><li>Defensa personal</li></Link>
                <Link to="/categoria/cocina"><li>Cocina</li></Link>
            </ul>
        </div>
        <Link className='cart' to="/cart">
          <CartWidget/>
        </Link>
    </header>
  )
}
