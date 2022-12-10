import React from 'react'
import Cart from './CartWidget'
import './Header.css'

export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
        <img src="/img/knifeLogo.jpg" alt="knife" />
        </div>
        <div className='navFlex'>
            <ul className='navLinks'>
                <a href=""><li>Caza</li></a>
                <a href=""><li>Defensa personal</li></a>
                <a href=""><li>Cocina</li></a>
            </ul>
        </div>
        <Cart/>
    </header>
  )
}
