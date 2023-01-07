import React from "react";
import Item from "./Item";

function ItemList(props){
    return(
        <div className="flexContainer">
            {props.productos.map((producto) =>(
                <Item 
                key = {producto.id}
                id = {producto.id}
                producto = {producto.producto}
                imagen = {producto.imagen}
                descripcion = {producto.descripcion}
                precio = {producto.precio}
                stock = {producto.stock}
                tipo = {producto.categoria}
                />
                ))}
        </div>
    )
}

export default ItemList