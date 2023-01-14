import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../contextStorage/cartContext";
import { Link } from "react-router-dom";

function ItemDetail({ producto }) {
  const [countInCart, setCountInCart] = useState(0);

  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    setCountInCart(count);
    addToCart(producto, count);
  }
  return (
    <div className="card-detail_main">
      <h1 className="card-detail_detail">{producto.producto}</h1>
      <div className="card-detail_img">
        <img src={producto.imagen} alt={producto.producto} />
      </div>
      <p>{producto.descripcion}</p>
      <span className="priceTag">${producto.precio}</span>

      {countInCart ? (
          <Link to="/cart">Ir al carrito</Link>
          ) : (
              <ItemCount stock={producto.stock} onAddCart={handleAddToCart} />
      )}
    </div>
  );
}

export default ItemDetail;
