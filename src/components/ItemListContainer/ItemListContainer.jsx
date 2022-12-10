import React, { useState, useEffect } from "react";
import APICall, { getCategoria } from "../services/mockService";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const categoriaID = useParams().categoriaID;

  useEffect(() => {
    if (categoriaID === undefined) {
      APICall().then((respuesta) => {
        setProductos(respuesta);
      });
    } else {
      getCategoria(categoriaID)
      .then ((respuestaFiltrada)=> setProductos(respuestaFiltrada))
    }
  }, 
[categoriaID]);

  return <ItemList productos={productos} />;
}

export default ItemListContainer;
