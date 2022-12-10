import React from "react";
import Item from "../ItemListContainer/Item";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import './Main.css'

export default function Main() {
  return (
    <div className="cardsContainer">
        <div className="Bnv">
        <h2>Bienvenidos a William Knifeman</h2>
        <h2>Aun no hemos abierto pero falta muy poco</h2>
        <ItemListContainer/>
        </div>
    </div>
  );
}
