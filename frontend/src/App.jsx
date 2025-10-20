import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Product from "./pages/Product";
import Create from "./pages/Create";
import Account from "./pages/Account";
import Success from "./pages/Success";
import Sidebar from './components/Sidebar';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Tos from './pages/Tos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><Sidebar /><Home /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/create" element={<Create />} />
          <Route path="/account" element={<Account />} />
          <Route path="/success" element={<Success />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<Privacy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
