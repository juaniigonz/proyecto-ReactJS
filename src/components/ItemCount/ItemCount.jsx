import React, { useState } from "react";
import productos from "../../data/productos";



export default function ItemCount() {
  const [count, setCount] = useState(1);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleLess() {
    setCount(count - 1);
  }

function onAddCart(){
 console.log("agregado");
}


  return (
    <div>
      <button disabled={count === 1} onClick={handleLess}>-</button>
      <span>{count}</span>
      <button disabled={count === productos.stock} onClick={handlePlus}>+</button>
      <button onClick={onAddCart}>Agregar</button>
    </div>
  );
}
