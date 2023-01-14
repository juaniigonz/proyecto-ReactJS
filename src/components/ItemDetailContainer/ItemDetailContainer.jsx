import React, {useState, useEffect} from "react";
import { getItem } from "../services/firebase"
import { useParams } from "react-router-dom";
import "./ItemDetail.css"
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";



function ItemDetailContainer(){
  const [producto, setProducto] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  let {id} = useParams()

async function getData(){
    let respuesta = await getItem(id)
    setProducto(respuesta)
    setIsLoading(false)
  }

  useEffect( () =>{
    getData();
  }, [])
return(<>  
  {isLoading ? <Loader/> : <ItemDetail producto={producto}/>}
    </>
)}



export default ItemDetailContainer;