import React from "react";
import Item from "./Item";
import productos from "../../data/productos";

function ItemList(props){
    return(
        <div className="flexContainer">
            {productos.map((item) =>(
                <Item 
                key = {item.id}
                id = {item.id}
                producto = {item.producto}
                imagen = {item.imagen}
                descripcion = {item.descripcion}
                precio = {item.precio}
                stock = {item.stock}
                tipo = {item.categoria}
                />
                ))}
        </div>
    )
}

export default ItemList