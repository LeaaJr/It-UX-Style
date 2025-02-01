import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Women from './Pages/Women';
import Men from './Pages/Men';
import LogIn from './Forms/LogIn';
import CreateAccount from './Forms/CreateAccount';
import ProductOverviews from './Pages/ProductOverviews';
import ShoppingCarts from './Pages/ShoppingCarts';
import { CartProvider } from './Context/CartContext';
import NowCollection from './Pages/NowCollection';
import Checkout from './Checkout/Checkout';


function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/ProductOverviews" element={<ProductOverviews />} />
          <Route path="/ShoppingCarts" element={<ShoppingCarts />} />
          <Route path="/NowCollection" element={<NowCollection />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;