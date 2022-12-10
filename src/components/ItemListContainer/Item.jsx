import React from "react";
import './Item.css'

export default function Item(props) {
  const{id, producto, imagen, descripcion, precio, stock} = props
  return (
    <div className="card">
      <h3>{producto}</h3>
      <div className="cardImg">
        <img src={imagen} alt="" />
      </div>
      <div className="cardDesc">
        <p>{descripcion}</p>
        <span>{precio}</span>
        <a href=""></a>
        <p>stock disponible :{stock}</p>
      </div>
    </div>
  );
}
