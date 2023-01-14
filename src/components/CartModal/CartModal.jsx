import React, { useContext } from "react";
import { cartContext } from "../../contextStorage/cartContext";
import CartBase from "./CartBase";
import Button from "../Btn/Button";
import { createBuyOrderWithStock } from "../services/firebase";

function CartModal() {
  const { cart, deleteCart } = useContext(cartContext);
  function handleCheckOut() {
    const order = {
      buyer: {
        name: "",
        email: "",
        phone: "",
      },
      items: cart,
      total: {},
      date: new Date(),
    };

    createBuyOrderWithStock(order).then((id) => {
      deleteCart();
      alert("orden generada");
    });
  }

  return (
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
        <h4> Total Final: $ </h4>
        <Button funcBtn={deleteCart}>Eliminar Carrito</Button>
        <Button funcBtn={handleCheckOut}>Finalizar Compra</Button>
      </div>
    </div>
  );
}

export default CartModal;
