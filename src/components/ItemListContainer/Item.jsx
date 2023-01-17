import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";


export default function Item(props) {
  let urlDetail = `/item/${props.id}`;
  return (
    <Link to={urlDetail}>
      <div className="card">
        <h3 className="prodTitle">{props.producto}</h3>
        <div className="cardImg">
          <img src={props.imagen} alt="item"></img>
        </div>
        <div className="cardDesc">
          <p>{props.descripcion}</p>
        </div>
          <span className="prodPrice">Precio: $ {props.precio}</span>
      </div>
    </Link>
  );
}
