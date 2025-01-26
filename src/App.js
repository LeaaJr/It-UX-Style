import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Women from './Pages/Women';
import Men from './Pages/Men';
import LogIn from './Forms/LogIn';
import CreateAccount from './Forms/CreateAccount';
import ProductOverviews from './Pages/ProductOverviews';



function App() {
  return (
 <>
  <Router>
   
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/women" element={<Women />} />
      <Route path="/men" element={<Men />} />
      <Route path="/LogIn" element={<LogIn />} />
      <Route path="/CreateAccount" element={<CreateAccount />} />
      <Route path="/ProductOverviews" element={<ProductOverviews />} />
    </Routes>
  </Router>
 </>
  );
}

export default App;
