import React, { useContext } from "react";
import { cartContext } from "../../contextStorage/cartContext";
import CartBase from "./CartBase";
import Button from "../Btn/Button";
import { createBuyOrderWithStock } from "../services/firebase";
import Checkout from "../Form/Checkout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function CartModal() {
  const { cart, deleteCart } = useContext(cartContext);
  const [emptyCart, setIsEmpty] = useState(cart.length === 0)
  const [totalCart, setTotalCart] = useState(0)

  useEffect(()=>{
    setIsEmpty(cart.length === 0)
    let initValue = 0
    cart.forEach(element =>{
      initValue +=(element.count * element.precio)
    })
    setTotalCart(initValue)
  },[cart])
  
  
  function handleCheckOut(buyerData) {
    const order = {
      buyer: buyerData,
      items: cart,
      total: {},
      date: new Date(),
    };

    createBuyOrderWithStock(order).then((id) => {
      deleteCart();
      alert("orden generada");
    });
  }

  if (emptyCart) {
    return (
      <div>
        <h2>
          Tu carrito esta vacio, vuelve al inicio y encuentra los mejor precios
          para tus necesidades
        </h2>
        <Link to={"/"} type="button">Inicio</Link>
      </div>
    );
  }
    
  return (
    <>
    <div>
      <h1>Tu Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <CartBase />
        </tbody>
      </table>
      <div>
        <h4> Total Final: $ {totalCart}</h4>
        <Button funcBtn={deleteCart}>Eliminar Carrito</Button>
        <Checkout funcBtn={handleCheckOut} />
      </div>
    </div>
    </>
  );
}

export default CartModal;
