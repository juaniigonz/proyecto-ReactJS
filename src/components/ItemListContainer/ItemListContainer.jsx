import React, { useState, useEffect } from "react";
import { APICall , getCategoria}from "../services/firebase";
import "./ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const categoriaID = useParams().categoriaID;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (categoriaID === undefined) {
      APICall().then((respuesta) => {
        setProductos(respuesta);
        setIsLoading(false);
      });
    } else {
      getCategoria(categoriaID).then((respuestaFiltrada) =>
        setProductos(respuestaFiltrada)
      );
      setIsLoading(false);
    }
  }, [categoriaID]);

  if (isLoading) {
    return <Loader/>
  }
  return <ItemList productos={productos} />;
}

export default ItemListContainer;
