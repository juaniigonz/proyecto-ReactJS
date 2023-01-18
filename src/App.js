import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContextProvider } from "./contextStorage/cartContext";
import CartModal from "./components/CartModal/CartModal";


function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
          <Route path="/" element={<ItemListContainer />} />
            <Route path="/proyecto-ReactJS/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/categoria/:categoriaID"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<CartModal />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
