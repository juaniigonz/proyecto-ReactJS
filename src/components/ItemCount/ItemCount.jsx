import React, { useState } from "react";
import Button from "../Btn/Button.jsx";


function ItemCount({onAddCart, stock}) {
  const [count, setCount] = useState(1);
  

  function handlePlus() {
    if(count < stock ) setCount(count + 1);
    
  }

  function handleLess() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div>
      <Button funcBtn={handleLess}>-</Button>
      <span>{count}</span>
      <Button funcBtn={handlePlus}>+</Button>
      <Button funcBtn={()=>onAddCart(count)}>Agregar</Button>
    </div>
  );
}
export default ItemCount