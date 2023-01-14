import React from "react";
import { useState } from "react";
import Button from "../Btn/Button";
import InputForm from "./InputForm";

function Checkout({ btnCheckout }) {
  const [buyerData, setBuyerData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  function inputChange(e) {
    let nameInput = e.target.nombre;
    let value = e.target.value;
    
    const newBuyerData = { ...buyerData };
    newBuyerData[nameInput] = value;
    setBuyerData(newBuyerData);
}

  function submit(e) {
    e.preventDefault();
    setBuyerData({
      nombre: "",
      email: "",
      telefono: "",
    });
    btnCheckout(buyerData);
  }

  return <div>
    <h1>Finaliza tu compra</h1>
    <form>
        <InputForm
        value = {buyerData.name}
        name = "name"
        title ="Nombre Completo"
        onChange={inputChange}
        />
        <InputForm
        value = {buyerData.email}
        name = "email"
        title ="Email"
        onChange={inputChange}
        />
        <InputForm
        value = {buyerData.telefono}
        name = "telefono"
        title ="Telefono"
        onChange={inputChange}
        />
    </form>
    <Button funcBtn={submit}>Finalizar Compra</Button>
  </div>;
}

export default Checkout;
