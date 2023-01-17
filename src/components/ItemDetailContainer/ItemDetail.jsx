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
    <div className="detailMain">
      <div className="detailImg">
        <img src={producto.imagen} alt={producto.producto} />
      </div>
      <div className="detailDesc">
        <h1 className="detailTitle">{producto.producto}</h1>
        <p>{producto.descripcion}</p>
        <div className="priceCount">
          <span className="priceTag">${producto.precio}</span>
          {countInCart ? (
            <div className="lastStepDetail">
              <Link className="detailLink" to="/cart">
                Ir al carrito
              </Link>
              <Link to="/">Continuar Comprando</Link>
            </div>
          ) : (
            <ItemCount
              className="itemCount"
              stock={producto.stock}
              onAddCart={handleAddToCart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
