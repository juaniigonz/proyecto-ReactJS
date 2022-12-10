import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { id, producto, imagen, descripcion, precio, stock } = props;
  let urlDetail = `/item/${props.id}`;
  return (
    <Link to={urlDetail}>
      <div className="card">
        <h3>{producto}</h3>
        <div className="cardImg">
          <img src={imagen} alt="" />
        </div>
        <div className="cardDesc">
          <p>{descripcion}</p>
          <span>${precio}</span>
          <a href=""></a>
          <span>stock disponible :{stock}</span>
        </div>
      </div>
    </Link>
  );
}
