import React from "react";
import { useState } from "react";
import InputForm from "./InputForm";
import "../CartModal/cart.css"

function Checkout({ btnCheckout }) {
  const [buyerData, setBuyerData] = useState({
    name: "",
    email: "",
    telefono: "",
  });

  function inputChange(evt) {
    let nameInput = evt.target.name;
    let value = evt.target.value;
    
    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
}

  function onSubmit(evt) {
    evt.preventDefault();
    btnCheckout(buyerData);
  }

  return <div>
    <h2>Completa el Formulario para finalizar la compra</h2>
    <form className="formFlex">
        <InputForm
        value = {buyerData.name}
        name = "name"
        title ="Nombre Completo:"
        onChange={inputChange}
        />
        <InputForm
        value = {buyerData.email}
        name = "email"
        title ="Email:"
        onChange={inputChange}
        />
        <InputForm
        value = {buyerData.telefono}
        name = "telefono"
        title ="Telefono:"
        onChange={inputChange}
        />
    <button onClick={onSubmit}>Finalizar Compra</button>
    </form>
  </div>;
}

export default Checkout;
