import React, {useState, useEffect} from "react";
import APICall from "../services/mockService";
import "./ItemListContainer.css"
import ItemList from "./ItemList";

function ItemListContainer(){

    const [productos, setProductos] = useState([])

useEffect(()=>{

    APICall().then((respuesta)=> setProductos(respuesta))
}, [])
   
return <ItemList productos={productos}/>
}



export default ItemListContainer;