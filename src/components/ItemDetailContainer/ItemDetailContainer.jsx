import React, {useState, useEffect} from "react";
import { getItem } from "../services/mockService"
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import "./ItemDetail.css"


function ItemDetailContainer(){
  const [producto, setProducto] = useState([])
  
  let {id} = useParams()

async function getData(){
    let respuesta = await getItem(id)
    console.log(producto)
    setProducto(respuesta)
  }

  useEffect( () =>{
    getData();
  }, [])

return( 
    <div className="card-detail_main">
    <h1 className="card-detail_detail">{producto.producto}</h1>
    <div className="card-detail_img">
    <img src={producto.imagen} alt={producto.producto} />
    </div>
    <p>{producto.descripcion}</p>
    <span className="priceTag">${producto.precio}</span>
    <ItemCount/>
</div>
)}



export default ItemDetailContainer;