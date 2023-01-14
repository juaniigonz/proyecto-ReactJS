import React from 'react'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import {cartContext} from "../../contextStorage/cartContext"


function CartWidget() {

  const valueContext = useContext(cartContext)
  const showCartCount = valueContext.totalItemsInCart > 0  

  return (
    <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} />
      {showCartCount && <span>{valueContext.totalItemsInCart}</span>}
    </div>
    
  )
}

export default CartWidget