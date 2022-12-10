import React, {useState, useEffect} from "react";
import { getItem } from "../services/mockService"
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";

function ItemDetailContainer(){
    const [producto, setProducto] = useState([])

let {id} = useParams()

useEffect(()=>{
    getItem(id)
    .then((respuesta)=> setProducto(respuesta))
    .catch( errorMsg => console.error("error en la promise", errorMsg))
},[])

return( 
    <div className="card-detail_main">
    <h1 className="card-detail_detail">{producto.producto}</h1>
    <div className="card-detail_img">
    <img src={producto.imagen} alt={producto.producto} />
    </div>
    <span className="priceTag">${producto.precio}</span>
    <ItemCount/>
</div>
)}



export default ItemDetailContainer;