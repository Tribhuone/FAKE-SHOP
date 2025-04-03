
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import Header from "./Header";
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<ProductListing productInfo/>}></Route>
          <Route path="/product/:productId" exact element={<ProductDetail/>}></Route>
          <Route>404 Not Found!</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
