import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import ProductList from './pages/ProductList'

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/product/:id" exact element={<Product />} />
            <Route path="/products/:category" exact element={<ProductList />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
