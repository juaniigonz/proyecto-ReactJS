import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categoria/:categoriaID' element={<ItemListContainer/>}/>
      </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
