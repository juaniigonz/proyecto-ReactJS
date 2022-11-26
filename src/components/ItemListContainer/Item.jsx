import React from "react";
import './Item.css'

export default function Item(props) {
  const{name, img, desc, price } = props
  return (
    <div className="card">
      <h3>{name}</h3>
      <div className="cardImg">
        <img src={img} alt="" />
      </div>
      <div className="cardDesc">
        <p>{desc}</p>
        <span>$ {price}</span>
        <a href=""></a>
      </div>
    </div>
  );
}
